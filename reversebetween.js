function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function reverseBetween(head, left, right) {


    let dummy = new ListNode(0);
    
    dummy.next = head

    let leftPre = dummy
    let currNode = head

    for(let i=0; i< left-1; i++){
        leftPre = leftPre.next
        currNode = currNode.next
    }

    let subListHead = currNode

    let preNode = null
    for(let i=0; i<= right - left; i++){
        let nextNode = currNode.next
        currNode.next = preNode
        preNode = currNode
        currNode = nextNode
    }

    leftPre.next = preNode
    subListHead.next = currNode

    return dummy.next;
}
