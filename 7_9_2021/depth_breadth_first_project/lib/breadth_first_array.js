function breadthFirstArray(root) {
    let nodeList = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        nodeList.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return nodeList;
}

module.exports = {
    breadthFirstArray
};