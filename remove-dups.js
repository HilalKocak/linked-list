class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function removeDups(linkedList) {
    let head = linkedList

    while(linkedList.next !== null){
        if(linkedList.val === linkedList.next.val){
            linkedList.next = linkedList.next.next
        }else{
            linkedList = linkedList.next
        }
    }

    return head
}

function printList(head) {
    while(head !== null){
        console.log(head.val + '=> ')
        head = head.next
    }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


printList(removeDups(a))
// 5 -> 5 -> 7 -> 7 -> 7 -> 6