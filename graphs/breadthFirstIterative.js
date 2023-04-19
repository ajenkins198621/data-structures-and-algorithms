const breadthFirstIterative = (graph, source) => {
    const result = [];
    const queue = [ source ];

    while(queue.length > 0) {
        const current = queue.shift();
        result.push(current);
        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }    
    }

    
    return result;
};

module.exports = breadthFirstIterative;