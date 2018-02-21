// function findAdjacent(node, vertices, edges) {
//   let foundNodes = [];
//   let listVertices = [];
//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i].includes(node)) {
//       for (let j in edges[i]) {
//         if (!foundNodes.includes(edges[i][j]) && edges[i][j] != node) {
//           foundNodes.push(edges[i][j]);
//           for (let k in vertices) {
//             if (
//               vertices[k].name === edges[i][j] &&
//               !listVertices.includes(vertices[k]) &&
//               vertices[k].distance === null
//             ) {
//               listVertices.push(vertices[k]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return listVertices;
// }

function findAdjacent(node, vertices, edges) {
  let foundNodes = [];
  let listVertices = [];
  for (let i in edges) {
    if (edges[i].includes(node)) {
      if (!foundNodes.includes(edges[i][0]) && edges[i][0] != node) {
        foundNodes.push(edges[i][0]);
      }
      if (!foundNodes.includes(edges[i][1]) && edges[i][1] != node) {
        foundNodes.push(edges[i][1]);
      }
    }
    for (let j in vertices) {
      if (
        vertices[j].distance === null &&
        foundNodes.includes(vertices[j].name) &&
        !listVertices.includes(vertices[j])
      ) {
        listVertices.push(vertices[j]);
      }
    }
  }
  return listVertices;
}

function markDistanceAndPredecessor(vertice, adjacentNodes) {
  vertice.distance = 0;
  for (let i in adjacentNodes) {
    adjacentNodes[i].distance = vertice.distance + 1;
    adjacentNodes[i].predecessor = vertice;
  }
  return adjacentNodes;
}
// function bfs(rootNode, vertices, edges) {
//   let adjacentNodes = markDistanceAndPredecessor(
//     rootNode,
//     findAdjacent(rootNode.name, vertices, edges)
//   );
//   let nodes = Array.isArray(rootNode) ? [...rootNode] : [rootNode];
//   for (let i in adjacentNodes) {
//     let adjacents = bfs(adjacentNodes[i], vertices, edges);
//     nodes = [...nodes, ...adjacents];
//   }
//   // console.log("nodes", nodes);
//   return nodes;
// }

function bfs(rootNode, vertices, edges) {
  let queue = Array.isArray(rootNode) ? [...rootNode] : [rootNode];
  let nodes = [];
  while (queue.length) {
    let currentNode = queue.shift();
    nodes.push(currentNode);
    let adjacentNodes = markDistanceAndPredecessor(
      currentNode,
      findAdjacent(currentNode.name, vertices, edges)
    );
    queue = [...queue, ...adjacentNodes];
  }
  return nodes;
}
//
// edges = [
//   ["14th&6th", "23rd&6th"],
//   ["23rd&6th", "34th&6th"],
//   ["34th&6th", "28th&Bwy"],
//   ["28th&Bwy", "23rd&Bwy"],
//   ["23rd&Bwy", "14th&Lex"],
//   ["14th&Lex", "23rd&Lex"]
// ];
//
// vertices = [
//   { name: "34th&6th", distance: null, predecessor: null },
//   { name: "23rd&6th", distance: null, predecessor: null },
//   { name: "28th&Bwy", distance: null, predecessor: null },
//
//   { name: "14th&6th", distance: null, predecessor: null },
//   { name: "23rd&Bwy", distance: null, predecessor: null },
//   { name: "14th&Lex", distance: null, predecessor: null },
//   { name: "23rd&Lex", distance: null, predecessor: null }
// ];
//
// let startingNode = vertices[0];
// let result = bfs(startingNode, vertices, edges);
// console.log("result", result);
// console.log("here", result.map(el => el.name));
