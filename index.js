class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const getNodeValue = (head, index) => {
//   if(head === null) return null
//   let i = 0
//   while(head !== null){
//     if(i === index) return head.val
//     head = head.next
//     i++
//   }
//   return null
// };


const getNodeValue = (head, index) => {
    if(head === null) return null
    
    if(index === 0) return head.val
    
    return getNodeValue(head.next, index-1)
  };
  
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 3); // 'd'
