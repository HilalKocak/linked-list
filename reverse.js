class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
const reverseList = (head) => {
    let prev = null
    current = head
    while(current !== null){
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
  };
  
// const reverseList = (head, prev=null) => {
// if(head === null) return prev
//     const next = head.next
//     head.next = prev
//     return reverseList(next, head)  
// };
  
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a)) // f -> e -> d -> c -> b -> a