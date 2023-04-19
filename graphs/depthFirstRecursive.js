const depthFirstRecursive = (graph, source, result = []) => {
    result.push(source);
    for(let neighbor of graph[source]) {
        result = depthFirstRecursive(graph, neighbor, result);
    }
    return result;
}

module.exports = depthFirstRecursive;