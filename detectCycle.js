var detectCycle = function(head) {
    if (head === null || head.next === null) {
       return null;
   }
   let fast = head
   let slow = head
   let entry = head
   let hasCycle = false

   while(fast !== null && fast.next !== null ){
       fast = fast.next.next
       slow = slow.next
       if(fast === slow){
           hasCycle = true
           break
       }
   }

   if(!hasCycle) return null
   while(entry != slow) {
       slow = slow.next
       entry = entry.next
   }

   return entry

  
};

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;


node4.next = node2; 

let cycleStartNode = detectCycle(head);

console.log(cycleStartNode)