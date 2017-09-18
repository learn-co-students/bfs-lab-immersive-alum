let myEdges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let myVertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null},
]


function findAdjacent(rootNode, vertices, edges) {
  // Find edges where one of the endpoints is the root
  let filteredEdges = edges.filter( edge => {
    return edge.includes(rootNode)
  })

  // Remove the root endpoint from each edge and keep only the adjacent nodes
  filteredEdges.map( edge => {
    edge[0] === rootNode ? edge.splice(0, 1) : edge.splice(1, 1)
  })

  // Flatten array
  filteredEdges = [].concat.apply([], filteredEdges)

  // Use the adjacent node names to filter in the vertices
  let filteredVertices = vertices.filter( vertex => {
    return filteredEdges.includes(vertex.name) && vertex.distance === null
  })

  return filteredVertices
}


function markDistanceAndPredecessor(parent, children) {
  children.map( child => {
    child.distance = parent.distance + 1
    child.predecessor = parent
  })
}


function bfs(root, vertices, edges){
  let visited = []
  let rootNode = root
  rootNode.distance = 0
  let queue = [rootNode]

  while (queue.length > 0) {
    let first = queue.shift()
    visited.push(first)
    let adjacent = findAdjacent(first.name, vertices, edges)
    markDistanceAndPredecessor(first, adjacent)
    adjacent.forEach( vertex => {
      console.log("adding to queue -------->", vertex.name);
      queue.push(vertex)
    })
  }
  return visited
}

console.log(bfs(myVertices[0], myVertices, myEdges))
