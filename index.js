// edges = [
//   ['14th&6th', '23rd&6th'],
//   ['23rd&6th', '34th&6th'],
//   ['34th&6th', '28th&Bwy'],
//   ['28th&Bwy', '23rd&Bwy'],
//   ['23rd&Bwy', '14th&Lex'],
//   ['14th&Lex', '23rd&Lex']
// ]
//
// vertices = [
//   {name: '34th&6th', distance: null, predecessor: null},
//   {name: '23rd&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null},
//
//   {name: '14th&6th', distance: null, predecessor: null},
//   {name: '23rd&Bwy', distance: null, predecessor: null},
//   {name: '14th&Lex', distance: null, predecessor: null},
//   {name: '23rd&Lex', distance: null, predecessor: null}
// ]

// function bfs(rootNode, vertices, edges){
//
// }

// 1) #findAdjacentNodes should return an array of adjacent nodes:
// 2) #findAdjacentNodes excludes discovered nodes:
let findAdjacent = (nodeToFind,  vertices, edges)=>{
  let adjacent = []
  edges.forEach((subarray)=>{
    if(subarray.includes(nodeToFind)){
      // adjacent.push("found")
      subarray.forEach( element=>{if(element!=nodeToFind){
        // adjacent.push(element)
        vertices.forEach(vertex=>{
          if(vertex.name == element){
            let vertexExists = false
            adjacent.forEach(itemInAdjacent=>{
              if(itemInAdjacent.name == vertex.name){vertexExists=true}
            })
            if(!vertexExists) {adjacent.push(vertex)}
          }
        })
      } })
      //ok the above is good but we need to find the actual nodes and push the nodes not hte keys(names)
    }
  })
  return adjacent
}

console.log(findAdjacent('34th&6th',  vertices, edges))
// toEqual([{name: '23rd&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null}
