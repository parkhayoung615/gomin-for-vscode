class DijstraUtil {
    constructor(graph){
        this.graph = graph;
        this.resultMap = new Map()
    }

    getDistance(startId) {
        if(this.resultMap.get(startId) !== undefined){
            return this.resultMap.get(startId)
        }

        let currentEdge, currentDistance, currentNode
        let nextEdge, nextDistance, nextNode

        const parents = {

        };

        let distance
        let nodeList = []
        let distances = new Map()

        distances.set(startId, 0)

        let queue = new MinHeap()
        queue.push(new Edge(0, startId))

        while(queue.length > 0){
            currentEdge = queue.poll();
            currentDistance = currentEdge.distance
            currentNode = currentEdge.node

            if(currentDistance > distances.get(currentNode)){
                continue
            }

            nodeList = this.graph.get(currentNode);

            for(let x of nodeList){
                nextEdge = x
                nextDistance = nextEdge.distance
                nextNode = nextEdge.node

                distance = nextDistance + currentDistance

                if(distances.get(nextNode) === undefined || distance < distances.get(nextNode)){
                    distances.set(nextNode, distance)
                    queue.push(new Edge(distance, nextNode))
                    parents[nextNode] = currentNode;
                }
            }
        }

        this.resultMap.set(startId, distances);

        return parents;
    }
}