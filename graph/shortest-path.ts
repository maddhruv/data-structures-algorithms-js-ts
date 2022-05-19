const shortestPath = (graph, source, destination) => {
  const queue = [[source, 0]],
    visited = new Set();

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node == destination) return distance;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};
