const { tree } = require('./tree');
const binaryTreePreOrder = require('./binaryTreePreOrder');
const binaryTreeInOrder = require('./binaryTreeInOrder');
const binaryTreePostOrder = require('./binaryTreePostOrder');

describe('Tree Traversal', () => {
    it('Should Pre Order', () => {
        expect(binaryTreePreOrder(tree)).toEqual([
            20,
            10,
            5,
            7,
            15,
            50,
            30,
            29,
            45,
            100,
        ]);
    });
    it('Should In Order', () => {
        expect(binaryTreeInOrder(tree)).toEqual([
            5,
            7,
            10,
            15,
            20,
            29,
            30,
            45,
            50,
            100,
        ]);
    });
    it('Should Post Order', () => {
        expect(binaryTreePostOrder(tree)).toEqual([
            7,
            5,
            15,
            10,
            29,
            45,
            30,
            100,
            50,
            20,
        ]);
    });
});