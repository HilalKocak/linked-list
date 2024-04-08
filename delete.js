// const removeNode = (head, targetVal) => {
//   if(head.val === targetVal) return head.next
//   let current = head
//   let prev = null
//   while(current !== null){
//     if(current.val === targetVal){
//       prev.next = current.next
//       break;
//     }
    
//     prev = current
//     current = current.next
//   }
  
//   return head
// };
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const removeNode = (head, targetVal) => {
    if(head === null) return null
    if(head.val === targetVal) return head.next
    head.next = removeNode(head.next, targetVal)
    return head
  
  };
  

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

console.log(removeNode(a, "c"))
// a -> b -> d -> e -> f