// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;

  let root = new TreeNode(preorder[0]);

  let midIdx = inorder.indexOf(root.val); //get the index of the root value
  let leftInorder = inorder.slice(0, midIdx); //get all the values left of root.val
  let rightInorder= inorder.slice(midIdx + 1); //get all the values right of the root.val

  let leftPreorder = preorder.filter(val => leftInorder.includes(val));
  let rightPreorder = preorder.filter(val => rightInorder.includes(val));

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));