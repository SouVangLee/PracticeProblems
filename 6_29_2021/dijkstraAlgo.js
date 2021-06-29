function dijkstras(graph, source) {
  let distance = {};
  for (let node in graph) {
    distance[node] = Infinity; //set each node's value to Infinity. The value will be replaced with the smallest distance
  }
  distance[source] = 0; //set the distance of the source to 0

  let unvisited = new Set(Object.keys(graph)); //initialize and track all of the unvisited nodes
  let previous = {}; //prepare an object to track the optimal path

  while (unvisited.size > 0) {
    let currNode = getSmallestNode(unvisited, distance);
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      let distanceToNeighbor = graph[currNode][neighbor];
      let totalDistance = distanceToNeighbor + distance[currNode];

      if (totalDistance < distance[neighbor]) {
        distance[neighbor] = totalDistance;
        previous[neighbor] = currNode;
      }
    }
  }

  return { distance, previous };
}

//find the unvisited node with the smallest distance
function getSmallestNode(unvisited, distance) {
  return Array.from(unvisited).reduce((minNode, node) => {
    if (distance[node] < distance[minNode]) {
      return node;
    } else {
      return minNode;
    }
  })
}

let graph = {
  'a': { 'c': 1, 'b': 7 },
  'b': { 'a': 7, 'd': 12, 'e': 13 },
  'c': { 'a': 1, 'd': 20, 'f': 4 },
  'd': { 'b': 12, 'c': 20, 'e': 5 },
  'e': { 'b': 13, 'd': 5, 'f': 9 },
  'f': { 'c': 4, 'e': 9 }
};


console.log(dijkstras(graph, 'a'));