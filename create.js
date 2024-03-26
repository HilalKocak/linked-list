class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  //Time O(n) Space O(n)
  const createLinkedList = (values) => {
    let newNode = new Node(null)
    let current = newNode
    for(let value of values){
      current.next = new Node(value)
      current = current.next
    }
    
    return newNode.next
  };

//Time O(n) Space O(n^2)
const createLinkedListRecursive = (values) => {
    if(values.length === 0) return null
    const head = new Node(values[0])
    head.next = createLinkedList(values.slice(1))
    return head
  };



  //Time O(n) Space O(n)
const createLinkedListRecursiveRefactored = (values, index) => {
    if(values.length === index) return null
    const head = new Node(values[0])
    head.next = createLinkedList(values, index)
    return head
  };

console.log(createLinkedList(["h", "e", "y"]))