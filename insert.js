
const insertNode = (head, value, index) => {
    if(index === 0){
      let newNode = new Node(value)
      newNode.next = head
      return newNode
    }
  
    let current = head
    let count = 0
    while(current !== null){
      if(count === index-1){
        let newNext = current.next
        current.next = new Node(value)
        current.next.next = newNext
      }
      count++
      current = current.next
    }
    
    return head
    
  };
  
  
const insertNode2 = (head, value, index, count=0) => {
    if(head === null) return
    if(index === 0){
        let newNode = new Node(value)
        newNode.next = head
        return newNode
    }
    if(count === index-1){
        let newNext = head.next
        head.next = new Node(value)
        head.next.next = newNext
    }
    insertNode(head.next, value, index, count+1)
    return head
};



  // index = 2 val = x
  // a -> b -> x -> c ->  d
  //     cur     newNext
  
  