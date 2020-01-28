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
let heightTree = new BinarySearchTree();
heightTree.insert(3, 3);
heightTree.insert(1, 1);
heightTree.insert(4, 4);
heightTree.insert(6, 6);
heightTree.insert(9, 9);
heightTree.insert(2, 2);
heightTree.insert(5, 5);
heightTree.insert(7, 7);

function height(node) {
    let leftHeight = 0;
    let rightHeight = 0;

    if (!node) return 0;

    leftHeight = height(node.left);
    rightHeight = height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
};

console.log(height(heightTree));

//number 6
function isItBST (tree) {
    if(tree.left){
        if(tree.left.key < tree.key){
            return isItBST(tree.left)
        } else {
            return false
        }
    }

    if(tree.right){
        if(tree.right.key > tree.key){
            return isItBST(tree.right)
        } else {
            return false
        }
    }

    return true;
}

console.log(isItBST(heightTree));

//number 7
