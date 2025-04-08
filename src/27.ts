from typing import List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root: TreeNode) -> List[int]:
    result = []
    current_node = root
    
    while current_node is not None or current_node.left is not None:
        if current_node.left is not None:
            current_node = current_node.left
        else:
            result.append(current_node.val)
            current_node = current_node.right

    return result
