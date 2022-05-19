function Graph() {
  this.graph = {};

  this.addNode = function (node) {
    if (!this.graph[node]) {
      this.graph[node] = [];
    }
  };

  this.addEdge = function (source, destination) {
    this.addNode(source);
    this.addNode(destination);

    this.graph[source].push(destination);
    this.graph[destination].push(source);
  };

  this.removeEdge = function (source, destination) {
    this.graph[source] = this.graph[source].filter(
      (node) => node !== destination
    );
    this.graph[destination] = this.graph[destination].filter(
      (node) => node !== source
    );
  };

  this.removeNode = function (node) {
    while (this.graph[node].length) {
      const connectedNode = this.graph[node].pop();
      this.removeEdge(node, connectedNode);
    }

    delete this.graph[node];
  };
}

Graph.prototype.bfs = function (start) {
  const queue = [start];
  const result = [];
  const visited = {
    [start]: true,
  };

  let currentNode;

  while (queue.length) {
    currentNode = queue.shift();

    result.push(currentNode);

    this.graph[currentNode].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    });
  }

  return result;
};

Graph.prototype.dfs = function (start) {
  const stack = [start];
  const result = [];
  const visited = {
    [start]: true,
  };

  let currentNode;

  while (stack.length) {
    currentNode = stack.pop();

    result.push(currentNode);
    this.graph[currentNode].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
};

Graph.prototype.hasPath = function (source, destination) {
  if (source === destination) return true;

  this.graph[source].forEach((neighbor) => {
    if (this.hasPath(neighbor, destination)) {
      return true;
    }
  });

  return false;
};
