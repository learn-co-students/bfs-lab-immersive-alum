function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let queue = [rootNode]
  const visited = []

  while (queue[0]) {
    const currentNode = queue.shift()
    const adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    if (adjacentNodes.length > 0) {
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      adjacentNodes.forEach(node => queue.push(node))
    }
    visited.push(currentNode)
  }
  return visited
}

function findAdjacent(rootNode, vertices, edges) {
  const adjacentNodes = []

  edges.forEach(edge => {
    let adjacentNode
    if (edge[0] === rootNode) {
      adjacentNode = edge[1]
    } else if (edge[1] === rootNode) {
      adjacentNode = edge[0]
    }

    if (adjacentNode) {
      const vertex = vertices.find(v => v.name === adjacentNode)

      if (vertex.distance !== 0 && !vertex.distance) {
        adjacentNodes.push(vertex)
      }
    }
  })

  return adjacentNodes
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.forEach(node => {
    node.predecessor = vertex
    node.distance = vertex.distance + 1
  })
}
