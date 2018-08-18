
// Whats a good summary of our procedure? Add a vertex to the queue.
// Then we remove the first vertex added
//   and visit the adjacent vertices.
//   As each is visited, add each vertex to the queue.
//   Then continue the process exploring each vertex explored in turn.

//subfunction for findAdjacent() //find vertice from array and return it
let getVertice = (verticeNameToFind,vertices)=>{
  let verticeIndex=null;
  for(let i=0;i<vertices.length;i++){
    if(verticeNameToFind == vertices[i].name){verticeIndex=i}
  }
  // return verticeIndex
  if(verticeIndex == null){return null}
  if(vertices[verticeIndex].distance != null){return null}
  return vertices.splice(verticeIndex,1)[0] //[0] because send back vertice, splice creates new array
}

// return an array of adjacent nodes:
// 2) #findAdjacentNodes excludes discovered nodes:
let findAdjacent = (root, vertices,edges)=>{
  // console.log(`root is ${root}`);
  let adjacent = []
  //remove root from vertices // since it is "discovered" since self
  let removeRoot = (getVertice(root,vertices));

  edges.forEach((edge)=>{
    if(edge.includes(root)) {
      // console.log(edge);
      //now that we found the edges that contain the vertices, get non root vertices
      edge.forEach(verticeName=>{
        //if name is not root, then find the vertice in vertices array
        if(verticeName !== root){
          // console.log(verticeName);
          // console.log(getVertice(verticeName,vertices));
          // adjacent.push(getVertice(verticeName,vertices));
          let foundVertice = (getVertice(verticeName,vertices));
          if(foundVertice != null){adjacent.push(foundVertice)}
        }
      })
    }//if has root
  })//edges
  // console.log("*****************");
  // console.log(adjacent);
  // console.log(vertices);
  // console.log("now return");
  return adjacent
  // return "done"
} //end findAdjacent




//
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
//
// console.log(findAdjacent('34th&6th',  vertices, edges))
// console.log(findAdjacent('28th&Bwy',  vertices, edges))
// toEqual([{name: '23rd&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null}


//pseudicode
// rootNode = vertices[0]
// queue = []
// addVertexToQueue(rootNode)
//     // queue = [rootNode]
// while(!queue.length == 0) {
//     let firstNode = queue.shift()
// adjacentVertices = findAdjacent(firstNode)
//     for vertex in adjacentVertices {
//         markDistanceAndPredecessor(vertex)
//         addToQueue(vertex)
//     }
// }

// #markDistanceAndPredecessor should return an array of adjacent nodes:
let markDistanceAndPredecessor=(root,adjacentNodes)=>{
  // console.log(root);
  // console.log(adjacentNodes);
  // console.log("done");
  adjacentNodes.forEach(node=>{node.distance = 1; node.predecessor = root})
  return adjacentNodes
} //markDistanceAndPredecessor
////////////////////////////////////// START TEST markDistanceAndPredecessor

  // let twentyThirdAndSixth = vertices[1]
  // let twentyEighthAndBroadway = vertices[4]
  // let thirtyFourthAndSixth = vertices[0]
  // let adjacentNodes = [twentyThirdAndSixth, twentyEighthAndBroadway]
  //
  // let value = markDistanceAndPredecessor(thirtyFourthAndSixth, adjacentNodes)
  // console.log(value);

  // expect(twentyThirdAndSixth.distance).toEqual(1)
  // expect(twentyEighthAndBroadway.distance).toEqual(1)
  // expect(twentyEighthAndBroadway.predecessor).toEqual(thirtyFourthAndSixth)
////////////////////////////////////// END TEST markDistanceAndPredecessor
let containsVertice = (node,vertices)=>{ //this array is is array ordered from bfs not the array vertices passed to bfs
  //return true of array contains node already, false if not
  console.log('containsVertice called');
  for(let i=0;i<vertices.length;i++){
    if(node.name == vertices[i].name){return true}
  }
  return false
}

// 1) #bfs should return an array of nodes in the order they were visited:
let bfs = (startingNode, vertices,edges)=>{
  let ordered = []
  // console.log("start bfs " +startingNode.name);
  //push starting node to ordered
  // console.log(startingNode);
  ordered.push(startingNode)
  let adjacent = findAdjacent(startingNode.name, vertices,edges)
  // ordered = ordered.concat(adjacent);
  // console.log(adjacent);
  // console.log("that was adjacent");
  // // console.log(ordered);
  // let bfsreturn = []
  adjacent.forEach(node => {
    ordered.push(node)
  })
  adjacent.forEach(node => {
  //
  //   // bfsreturn.concat(bfs(node,vertices,edges))
  //   bfsreturn.push(bfs(node,vertices,edges))
    let temp = (bfs(node,vertices,edges))
    // console.log("***********************TEMP");
    // console.log(temp);
    // console.log("***********************END TEMP");
    temp.forEach(subnode=>{
      // ordered.push(subnode)
      //NO we want to check to see if exists first.
      let found = false //assume found
      for(let i=0;i<ordered.length;i++){
        if(ordered[i].name == subnode.name){found = true}
      }
      if(!found){ordered.push(subnode)}
    })
  //
  })
  // let flat = bfsreturn.flat()
  // console.log('****************************');
  // console.log(`bfsreturn = ${bfsreturn}`);
  // console.log(flat);
  // //*******************************
  // if(bfsreturn){
  //   bfsreturn.forEach(node=>{
  //     // console.log("bfsreturn.forEach");
  //     // console.log(node);
  //     if(!containsVertice(node,ordered)){
  //       // console.log("NODE IS::::::::::");
  //       // console.log(node);
  //       // console.log("END");
  //       // console.log("adding node");
  //       // console.log(node);
  //       ordered.push(node[0])
  //       // console.log("node added");
  //     }
  //   })
  // }
  // //*******************************
  return ordered
}

// let startingNode = vertices[0]
// let bfsreturn = bfs(startingNode, vertices, edges)
// console.log("#####################################");
// console.log(bfsreturn);
// .map(function(vertex){ return vertex.name; })).toEqual(
  // ['34th&6th', '23rd&6th', '28th&Bwy', '14th&6th', '23rd&Bwy', '14th&Lex',
  //   '23rd&Lex'])












//***********
// OLD code
// let findAdjacent = (nodeToFind,  vertices, edges)=>{
//   let adjacent = []
//   edges.forEach((subarray)=>{
//     if(subarray.includes(nodeToFind)){
//       // adjacent.push("found")
//       subarray.forEach( element=>{if(element!=nodeToFind){
//         // adjacent.push(element)
//         vertices.forEach(vertex=>{
//           if(vertex.name == element){
//             let vertexExists = false
//             adjacent.forEach(itemInAdjacent=>{
//               if(itemInAdjacent.name == vertex.name){vertexExists=true}
//             })
//             if(!vertexExists) {adjacent.push(vertex)}
//           }
//         })
//       } })
//       //ok the above is good but we need to find the actual nodes and push the nodes not hte keys(names)
//     }
//   })
//   return adjacent
// }
