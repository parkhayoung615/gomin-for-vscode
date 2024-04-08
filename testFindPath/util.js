async function getMap() {
    return await (await fetch('./dump.json', {method:"GET"})).json();
}