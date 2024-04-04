function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
// Time O(n)  Space O(1)
var isPalindrome = function(head) {
    if(!head || !head.next) return true


    let slow = head
    let fast = head

    while(fast.next && fast.next.next)
    {
        slow = slow.next
        fast = fast.next.next
    }
// reverse second half
    let second = slow.next
    slow.next = null
    let prev = null

    while(second){
        let next = second.next
        second.next = prev
        prev = second
        second = next
    }

    // prev = head of reversed second half
    let secondHalf = prev
    let first = head

    while(secondHalf && first){
        if(secondHalf.val !== first.val){
            return false
        }
        secondHalf = secondHalf.next
        first = first.next
    }
    return true

};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head));