// Put the starting node on a stack.
// While the stack is not empty, repeat steps 3-4.
// Pop a node and print it.
// Put all of the node's children on the top of the stack.

class TreeNode {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

function depthTraversal(node) {
    let stack = [node]

    while(stack.length) {
        let curr = stack.pop()
        console.log(curr.value)

        if (curr.left) stack.push(curr.left)
        if (curr.right) stack.push(curr.right)
    }
}

const simpleTree = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(3, null, null);
simpleTree.left = new TreeNode(1, null, null);
simpleTree.right.right = new TreeNode(2, null, null);
simpleTree.left.left = new TreeNode(5, null, null)

depthTraversal(simpleTree)