const { TreeNode } = require('./tree_node');

function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
let g = new TreeNode('g');
let h = new TreeNode('h');
let i = new TreeNode('i');
let j = new TreeNode('j');
let k = new TreeNode('k');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
d.right = h;
e.left = i;
e.right = j;
j.right = k;

console.log(treeHeight(a));



/*
               A                0
             /   \              
            B     C             1
          /  \     \            
        D    E      F           2
      /  \  / \                 
     G   H  I   J               3
                 \
                  K             4
*/

module.exports = {
    treeHeight
};