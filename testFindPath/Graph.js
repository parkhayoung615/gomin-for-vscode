class Graph {
    constructor(map) {
        this.graph = new Map();
        this.createGraph(map);
    }

    createGraph(map) {
        for(let y = 0; y < map.length; y++){
            for(let x = 0; x < map[0].length; x++){
                if(map[y][x] === 1){
                    continue;
                }

                const id = `${x}-${y}`;
                const list = [];

                this.checkFail(map, list, x, y);

                if (map[y][x] !== 2) {
                    this.graph.set(id, list);
                    continue;
                }

                this.checkRun(map, list, x, y);
                this.checkJump(map, list, x, y);

                this.graph.set(id, list);
            }
        }
    }

    checkRun(map, list, x, y) {
        if(map[y][x+1] === 2){
            list.push(new Edge(1, `${x+1}-${y}`));
        }
        if(map[y][x-1] === 2){
            list.push(new Edge(1, `${x-1}-${y}`));
        }
    }

    checkJump(map, list, x, y) {
        if (map[y-1]?.[x] === 1) {
            return;
        }

        for (let i = 1; i < 5; i++) {
            let isBlocked = false;

            for (let j = -i; j < i; j++) {
                if (j == 0) {
                    continue;
                }
                if (map[y-i]?.[x+j] === 1) {
                    continue;
                }
                if (map[y-i+1]?.[x+j+( j>0?-1:1 )] === 1) {
                    continue;
                }

                if(map[y-i]?.[x+j] === 2){
                    list.push(new Edge(i+j+1, `${x+j}-${y-i}`));
                }
            }
        }
    }

    checkFail(map, list, x, y) {
        let point = map[y+1]?.[x+1];
        if(point && point !== 1){
            list.push(new Edge(1, `${x+1}-${y+1}`));
        }
        point = map[y+1]?.[x];
        if(point && point !== 1){
            list.push(new Edge(1, `${x}-${y+1}`));
        }
        point = map[y+1]?.[x-1];
        if(point && point !== 1){
            list.push(new Edge(1, `${x-1}-${y+1}`));
        }
    }
}

class Edge {
    constructor(distance, node){
        this.distance = distance;
        this.node = node;
    }
}
