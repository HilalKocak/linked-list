class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function sumList(list1, list2) {
    let sum = 0 
    let carry = 0
    let dummy = new Node(0)
    let newNode = dummy

    while(list1 !== null || list2 !== null || carry > 0){
        sum = carry
        if(list1 !== null){
            sum += list1.val
            list1 = list1.next
        }

        if(list2 !== null){
            sum += list2.val
            list2 = list2.next
        }

        carry = Math.floor(sum/10)
        sum = sum % 10

        newNode.next = new Node(sum)
        newNode = newNode.next

    }

    return dummy.next
}

const a1 = new Node(7);
const a2 = new Node(1);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(5);
const b2 = new Node(9);
const b3 = new Node(2);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

console.log(sumList(a1, b1))