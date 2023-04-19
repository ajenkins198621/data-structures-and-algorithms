const depthFirstIterative = (graph, start) => {
    const stack = [start];
    const result = [];
    while (stack.length > 0) {
        const current = stack.pop(); // Because we are using a stack, we need to pop the last element off the top
        result.push(current);
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return result;
};

module.exports = depthFirstIterative;

