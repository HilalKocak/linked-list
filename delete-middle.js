class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function deleteMiddle(node, k) {
    let head = node
    let prev  = null


    while(node !== null){
        if(node.val === k){
            prev.next = node.next
        }else{
            prev = node
            
        }

        node = node.next
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
const d = new Node(8);
const e = new Node(9);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(deleteMiddle(a, 7))