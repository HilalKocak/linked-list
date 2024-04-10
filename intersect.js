class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function intersect(list1, list2) {
    if(list1 === null || list2 === null) return null
    let headA = list1
    let headB = list2

    while(list1 !== list2){
        list1 = (list1 === null) ? headB : list1.next
        list2 = (list2 === null) ? headA : list2.next
    }

    return list2
}