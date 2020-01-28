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
    //     I   S T   U
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

let BST = BinarySearchTree();
BST.insert(3,3)