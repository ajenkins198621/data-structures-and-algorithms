import { BinaryNode } from "./tree";

const walk = (tree: BinaryNode<number>, result: number[]) : number[] => {


    // visit the left node
    if(tree.left) {
        result = walk(tree.left, result);
    }
    
    // visit the node
    result.push(tree.value);

    // visit the right node
    if(tree.right) {
        result = walk(tree.right, result);
    }

    return result;
};

const binaryTreeInOrder = (tree: BinaryNode<number>) : number[] => {
    const result = walk(tree, []);
    return result;
};


module.exports = binaryTreeInOrder;