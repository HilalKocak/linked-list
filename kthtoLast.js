class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function returnKthToLast(root, k) {
   let first = root
   let second = root

   for(let i=0; i<k; i++){
        first = first.next
   }


   while(first !== null){
        first = first.next
        second = second.next
   }

   
   return second.val
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(1);
const e = new Node(2);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


console.log(returnKthToLast(a, 2)) // 2
// 5 -> 5 -> 7 -> 1 -> 2 -> 6  // 6-2