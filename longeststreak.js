class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
    let maxStreak = 0
    let currentStreak = 0
    
    let currentNode= head
    let prevVal = null
    while(currentNode !== null){
      if(currentNode.val === prevVal){
        currentStreak ++
      }else{
        currentStreak = 1
      }
      
      prevVal = currentNode.val
      maxStreak = Math.max(maxStreak, currentStreak)
      
      currentNode = currentNode.next
    }
    
    
    return maxStreak
  };


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

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a))