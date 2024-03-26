// Linked List Cycle
function ListNode(val) {
         this.val = val;
        this.next = null;
     }
    

var hasCycle = function(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next

        if(fast == slow) return true

    }

    return false
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

//cycle
head.next.next.next.next.next = head.next.next;
console.log(hasCycle(head))