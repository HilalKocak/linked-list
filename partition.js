class ListNode {
    constructor(data = 0, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  function partition(node, x) {
  let head = node
  let tail = node

  while(node !== null){
    let next = node.next
    if(node.data < x){
        node.next = head
        head = node
    }else{
        tail.next = node
        tail = node
    }
    node = next
  }

  tail.next = null

  return head

  }
let head = new ListNode(3);
head.next = new ListNode(5);
head.next.next = new ListNode(8);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(10);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);

let partitionValue = 5; 

let newHead = partition(head, partitionValue);

function printList(node) {
  let current = node;
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}

printList(newHead);
