class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListValues = (head) => {
//   let array = []
  
//   let current = head
//   while(current !== null){
//     array.push(current.val)
//     current = current.next
//   }
  
//   return array
// };


//recursive
const linkedListValues = (head) => {

let values = []
collectValues(head, values)
return values

function collectValues(node, values){
    if(node === null) return values
    values.push(node.val)
    collectValues(node.next, values)
}

};

