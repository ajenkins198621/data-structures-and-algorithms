const breadthFirstIterative = require('./breadthFirstIterative');

describe("breadthFirstIterative", () => {
    it("should perform breadth first search iteratively", () => {
        const graph = {
            a: ["c", "b"],
            b: ["d"],
            c: ["e"],
            d: ["f"],
            e: [],
            f: []
        };

        expect(breadthFirstIterative(graph, "a")).toEqual(["a", "c", "b", "e", "d", "f"]);
    });
});