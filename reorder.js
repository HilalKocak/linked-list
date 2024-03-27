
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reorderList(head) {
   if (!head || !head.next || !head.next.next) {
       return;
   }

   // 1. Split the list in half
   let slow = head, fast = head;
   while (fast.next && fast.next.next) {
       slow = slow.next;
       fast = fast.next.next;
   }

   // 2. Invert the second list
   let second = slow.next;
   slow.next = null;
   let prev = null;
   while (second) {
       let temp = second.next;
       second.next = prev;
       prev = second;
       second = temp;
   }

   // 3. Merge lists
   let first = head, secondHalf = prev;
   while (secondHalf) {
       let temp1 = first.next, temp2 = secondHalf.next;
       first.next = secondHalf;
       secondHalf.next = temp1;
       first = temp1;
       secondHalf = temp2;
   }
}
function printList(head) {
    let current = head;
    let listString = "";
    while (current) {
        listString += current.val + " -> ";
        current = current.next;
    }
    listString += "null";
    console.log(listString);
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log("Original List:");
printList(head); 

reorderList(head); 
console.log("Reordered List:");
printList(head);