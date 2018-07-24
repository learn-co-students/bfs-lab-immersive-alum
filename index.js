function bfs(node, vertices, edges){
  node.distance = 0
  let discovered = [node]
  let order = [node]
  while(discovered.length != 0){
    let current = discovered.shift()
    let adjacent = findAdjacent(current.name, vertices, edges)
    order = order.concat(adjacent)
    markDistanceAndPredecessor(current, adjacent)
    discovered = discovered.concat(adjacent)
  }
  return order
}

function findAdjacent(node,  vertices, edges){
  return edges.filter(function(x){
    return x.includes(node)
  }).map(function(x){
    return x.filter(function(y){
      return (y != node)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(y){
    return y.distance === null
  })
}

function markDistanceAndPredecessor(predecessor, nodes){
  nodes.map(function(x){
    x.distance = predecessor.distance + 1
    x.predecessor = predecessor
  })
}

function findNode(node, vertices){
  return vertices.find(function(vertex){
    return vertex.name == node
  })
}
