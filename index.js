let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null},
]

function findAdjacent(node, vertices, edges){
  let connections = edges.filter((edge)=>{
    return edge[0]===node || edge[1]===node
  })
  let streets = connections.map((connection)=>{
    return connection.filter((street)=>{
      return street!==node
    })
  })
  let adjacentVertices = vertices.filter((vertex)=>{
    return vertex.distance===null
           && vertex.name!==node
           && streets.some(street=>vertex.name===street.join(''))
    // return vertex.name===streets[0].join('') || vertex.name===streets[1].join('')
  })
  return adjacentVertices
}

function markDistanceAndPredecessor(node, adjacentNodes){
  return adjacentNodes.map((adjNode)=>{
    adjNode.predecessor = node
    adjNode.distance++
  })
}

function addToQueue(node, queue){
  queue.push(node)
}


function bfs(rootNode, vertices, edges){
  let result = []
  let queue = []
  addToQueue(rootNode, queue)
  while(queue.length!==0){
    let firstNode = queue.shift()
    result.push(firstNode)
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
    adjacentVertices.forEach((vertex)=> {
        markDistanceAndPredecessor(vertex, adjacentVertices)
        if (vertex.name!==rootNode.name) {
          addToQueue(vertex, queue)
        }
    })
  }
  return result
}
//
// rootNode = vertices[0]
// queue = []
// addVertexToQueue(rootNode)
//   //queue = [rootNode]
// while (!queue.length == 0) {
//   let firstNode = queue.shift()
//   adjacentVertices = findAdjacent(firstNode)
//     for vertex in adjacentVertices {
//       markDistanceAndPredecessor(vertex)
//       addToQueue(vertex)
//     }
// }

// so we need: findAdjacent, markDistanceAndPredecessor, addToQueue
