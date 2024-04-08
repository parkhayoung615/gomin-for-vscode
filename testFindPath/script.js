window.addEventListener("load", async () => {
    // const map = [];
    // for(let i = 0; i < 100; i++) {
    //     map.push([]);
    //     for(let j = 0; j < 100; j++) {
    //         map[i].push(Math.random() >= 0.7 ? 1 : 0);
    //     }   
    // }

    // console.log(map);

    const mapElement = document.querySelector("#map");
    const map = await getMap();
    const divList = [];

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            const block = map[i][j];
            const div = document.createElement('div');
            div.innerHTML = `${j}-${i}`;
            divList.push(div);
            if (block) {
                div.style.backgroundColor = 'black';
            }
            div.addEventListener('click', ()=>{
                divList.forEach((x)=>x.style.border="");
                div.style.border = '1px solid red';
                startFind(j, i);
            })
            mapElement.appendChild(div);
        }
    }
    
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                if (map[i-1]?.[j] !== undefined) {
                    map[i-1][j] = 2;
                }
            }
        }
    }

    const graph = new Graph(map);
    console.log(graph.graph);
    const dijstraUtil = new DijstraUtil(graph.graph);
    const resultMap = dijstraUtil.getDistance('13-13');

    let destination = '1-0';
    const list = [];
    console.log(resultMap);
    while (resultMap[destination]) {
        destination = resultMap[destination];
        list.push(destination);
    }

    const path = list.reverse();

    for (let i = 0; i < path.length; i++) {
        const [x, y] = path[i].split('-').map(Number);
        divList[y * 15 + x].style.backgroundColor = 'red';

        await move(x, y);
    }

});

const jump = 5;
const speed = 1;

async function move(x, y) {
    const user = document.querySelector("#u");
    user.style.left = `${x * 47}px`;
    user.style.top = `${y * 47}px`;
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res();
        }, 500);
    })
}