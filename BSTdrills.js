const BinarySearchTree = require('./binaryclass')
//number 1
//3,1,4,6,9,2,5,7

//////3
////1///4
/////2////6
////////5///9
///////////7

//E A S Y Q U E S T I O N

//     E
//    /  \
//   A    S
//    \   / \
//     E Q   Y
//      / \  / \
//     I   S T  U
//      \
//       O
//      /
//     N

//number 2

//////4
////1///6
/////2////9
////////5///7

//     S
//    /  \
//   A    Y
//    \   / \
//     E Q   T
//      / \    \
//     I   S    U
//      \
//       O
//      /
//     N

//number 3

function main() {
    let BST = new BinarySearchTree();
    let CHAR = new BinarySearchTree();

    BST.insert(3, 3);
    BST.insert(1, 1);
    BST.insert(4, 4);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);

    console.log(BST)

    CHAR.insert('E');
    CHAR.insert('A');
    CHAR.insert('S');
    CHAR.insert('Y');
    CHAR.insert('Q');
    CHAR.insert('U');
    CHAR.insert('E');
    CHAR.insert('S');
    CHAR.insert('T');
    CHAR.insert('I');
    CHAR.insert('O');
    CHAR.insert('N');

    console.log(CHAR)
}

main();

//number 4

//this function will add all the node values of the tree recursively

//number 5
let sampleTree = new BinarySearchTree();
sampleTree.insert(3, 3);
sampleTree.insert(1, 1);
sampleTree.insert(4, 4);
sampleTree.insert(6, 6);
sampleTree.insert(9, 9);
sampleTree.insert(2, 2);
sampleTree.insert(5, 5);
sampleTree.insert(7, 7);

function height(tree) {
    let leftHeight = 0;
    let rightHeight = 0;

    if (!tree) return 0;

    leftHeight = height(tree.left);
    rightHeight = height(tree.right);

    return Math.max(leftHeight, rightHeight) + 1;
};

console.log(height(sampleTree));

//number 6
function isItBST(tree) {
    if (tree.left) {
        if (tree.left.key < tree.key) {
            return isItBST(tree.left)
        } else {
            return false
        }
    }

    if (tree.right) {
        if (tree.right.key > tree.key) {
            return isItBST(tree.right)
        } else {
            return false
        }
    }

    return true;
}

console.log(isItBST(sampleTree));

//number 7
function nthLargestNode(tree) {

    let current = tree;

    while (current.right !== null) {
        current = current.right;
    }

    let parent = current.parent;
    if (current.left !== null && parent.left !== null) {
        return parent.key;
    }

    if (parent.left !== null) {
        let newNode = parent.left;

        while (newNode.right !== null) {
            newNode = newNode.right;
        }
        return newNode;
    }
};

console.log(nthLargestNode(sampleTree));

//number 8

function balance(tree) {
    let left = height(tree.left);
    let right = height(tree.eight);

    if (Math.abs(right - left) < 1) {
        return true;
    } else if (Math.abs(right - left) > 1) {
        return false;
    }
}

console.log(balance(sampleTree));

//number 9

const arr1 = [3, 5, 4, 6, 1, 0, 2]
const arr2 = [3, 1, 5, 2, 4, 6, 0]

function sameBST(arr1, arr2) {

    let sortedArray1 = arr1.sort();
    let sortedArray2 = arr2.sort();

    let a = sortedArray1.toString();
    let b = sortedArray2.toString();

    if (a === b) {
        return true
    } else {
        return false
    }
}

console.log(sameBST(arr1, arr2));