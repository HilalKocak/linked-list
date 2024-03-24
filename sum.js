class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
// const sumList = (head) => {
//   let sum = 0
//   while(head !== null){
//     sum += head.val
//     head = head.next
//   }
  
//   return sum
// };


const sumList = (head) => {
    return get_sum(head)

    function get_sum(node){
      if(node === null) return 0
      return node.val + get_sum(node.next)
    }
  };


const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a);