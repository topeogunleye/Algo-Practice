// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   // while there are still nodes to visit
//   while (stack.length > 0) {
//   // pop the next node off the stack
//     const current = stack.pop();
//     // print the node
//     console.log(current)
//     // add the neighbors of the node to the stack
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor)
//     }
//   }
// }

const depthFirstPrint = (graph, source) => {
  console.log(source)
  graph[source].forEach(neighbor => {
    depthFirstPrint(graph, neighbor)
  })
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstPrint(graph, 'a'); // abdfce

// breathFirstPrint(graph, 'a'); // acbedf