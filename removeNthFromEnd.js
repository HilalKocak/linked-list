class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
   
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Test
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;
head = removeNthFromEnd(head, n);


let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
