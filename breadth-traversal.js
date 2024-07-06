// 1. Put the starting node in a queue.
// 2. While the queue is not empty, repeat steps 3-4.
// 3. Dequeue a node and print it.
// 4. Put all of the node's children in the back of the queue.

class TreeNode {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  function breadthTraversal(node) {
    let queue = [node]

    while(queue.length) {
        let curr = queue.shift()
        console.log(curr.value)

        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
  }

const simpleTree = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(3, null, null);
simpleTree.left = new TreeNode(1, null, null);
simpleTree.right.right = new TreeNode(2, null, null);
simpleTree.left.left = new TreeNode(5, null, null)

breadthTraversal(simpleTree)