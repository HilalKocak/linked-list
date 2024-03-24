class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

// const linkedListFind = (head, target) => {
//   if(head === null) return false
//   while(head !== null){
//     if(head.val === target) return true
//     head = head.next
//   }
//   return false
// };


const linkedListFind = (head, target) => {
if(head === null) return false
return (head.val === target) || linkedListFind(head.next, target)
};

linkedListFind(a, "c"); // true