const depthFirstIterative = require('./depthFirstIterative');

describe("depthFirstIterative", () => {
    it("should perform depth first search iteratively", () => {
        const graph = {
            a: ["b", "c"],
            b: ["d"],
            c: ["e"],
            d: ["f"],
            e: [],
            f: []
        };

        expect(depthFirstIterative(graph, "a")).toEqual(["a", "c", "e", "b", "d", "f"]);
    });
});