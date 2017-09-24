function findAdjacent(name, vertices, edges){
  var group = []
  var i
  var j
  for(i=0; i<edges.length; i++){
    for(j=0; j<edges[i].length; j++){
      if(edges[i][j] === name) group.push(edges[i])
    }
  }
  var names = []
  for(i=0; i<group.length; i++){
    for(j=0; j<group[i].length; j++){
      if(group[i][j] !== name){
        names.push(group[i][j])
      }
    }
  }
  var nodes = []
  for(i=0; i<names.length; i++){
    var node = vertices.filter(node => node.name === names[i])[0]
    nodes.push(node)
  }
  return nodes.filter(n=> n.distance === null)
}

function markDistanceAndPredecessor(node, adjacents){
  node.distance = 0
  adjacents.map(n => {
    n.predecessor = node
    n.distance = node.distance+1
  })
  return adjacents
}

function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  var queue = [rootNode]
  var order = [rootNode]
  while (queue.length !== 0){
    var curr = queue.shift()
    var adjacents = findAdjacent(curr.name, vertices, edges)
    markDistanceAndPredecessor(curr, adjacents)
    queue = queue.concat(adjacents)
    order = order.concat(adjacents)
  }
  return order
}
