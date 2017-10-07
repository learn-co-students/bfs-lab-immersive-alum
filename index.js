function bfs(startingNode, vertices, edges){
  startingNode.distance = 0
  let discovered = [startingNode]
  let discoverOrder = [startingNode]
  while(discovered.length != 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}


function findAdjacent(nodeName, vertices, edges){
    return edges.filter((edge) => {
      return edge.includes(nodeName)
  }).map(edge => {
    return edge[0] != nodeName ? edge[0] : edge[1]
  }).map(edge => {
    return vertices.filter(node => {
      return node["name"] == edge
    })[0]
  }).filter(node => {
    return node.distance == null
  })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map(node => {
    node.distance = predecessor.distance + 1
    node.predecessor = predecessor
  })

}
