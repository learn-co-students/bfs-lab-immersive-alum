function findAdjacent(nodeName, vertices, edges){
  let cycle = edges.length

  let edge;
  let index;
  let adjacentIndex;
  let adjacentNodes = [];

  while(cycle > 0){
    edge = edges.shift();
    index = edge.indexOf(nodeName);
    if(index !== -1){
      adjacentIndex = index === 0 ? 1 : 0;
      vertices.forEach((vertex) => {
        if(vertex.name === edge[adjacentIndex]){
          adjacentNodes.push(vertex);
        }
      });
    } else{
      edges.push(edge);
    }
    --cycle;
  }

  return adjacentNodes;
}

function markDistanceAndPredecessor(node, adjacentNodes){
  adjacentNodes.forEach((vertex) => {
    vertex.distance = 1;
    vertex.predecessor = node;
  })
}

function bfs(startingNode, vertices, edges){
  let queue = [startingNode];
  let currentNode;
  let visitedNodes = [];
  let visited = {};
  visited.startingNode = true;

  let adjacentVertices;

  while(queue.length) {
    currentNode = queue.shift();
    visitedNodes.push(currentNode);
    adjacentVertices = findAdjacent(currentNode.name, vertices, edges);

    for(let vertex of adjacentVertices) {
      if(!visited[vertex]){
        visited.vertex = true;
        queue.push(vertex);
      }
    }
  }
  return visitedNodes;
}
