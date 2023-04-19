const depthFirstRecursive = require('./depthFirstRecursive');

describe("depthFirstRecursive", () => {
    it("should perform depth first search recursively", () => {
        const graph = {
            a: ["b", "c"],
            b: ["d"],
            c: ["e"],
            d: ["f"],
            e: [],
            f: []
        };

        expect(depthFirstRecursive(graph, "a")).toEqual(["a", "b", "d", "f", "c", "e"]);
    });
});