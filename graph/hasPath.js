const hasPath = (graph, src, dst) => {
  // todo
  if (src === dst) return true;

  // if (graph[src].includes(dst)) return true;
  // graph[src].forEach(neighbor => {
  //   console.log(neighbor)
  //   if (hasPath(graph, neighbor, dst)) {
  //     return true;
  //   }
  // })
  
for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true;
    }
}

  return false;
};

graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['k', 'g'],
  j: ['i'],
  k: []
}

console.log(hasPath(graph, 'f', 'k')) 