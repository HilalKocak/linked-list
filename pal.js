class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
// dummy
// head
//                       f
//             s
//   a -> a -> b -> b -> a -> a -> null
function isPalindrome2(linkedList) {
    let head = linkedList
    let dummy = new Node(0)
    dummy.next = linkedList

    let first = head
    let slow = head

    while(first.next !== null && first.next.next !== null){
        first = first.next.next // first does not need o=to be in the end we want slow come half
        slow = slow.next
    }

    console.log("slow", slow.val)
    let firstHalf = head
    

    let prev = null
    let current = slow.next
    while(current !== null){
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    let secondHalf = prev


    while(secondHalf !== null){
        if(firstHalf.val !== secondHalf.val){
            return false
        }
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }

    return true



}
function printList(head) {
    while(head !== null){
        console.log(head.val + '=> ')
        head = head.next
    }
}
// 1 -> 2 -> 3 -> 4 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(isPalindrome2(head))