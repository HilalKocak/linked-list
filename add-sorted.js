class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addSorted(values) {
    if(values.length === 0) return null;
    let root = new Node(values[0])
    
    for(let i=1; i<values.length; i++){
        let newVal = values[i]
        let newNode = new Node(newVal)
        

        if(newNode.val < root.val){
            newNode.next = root
            root = newNode
            
        }else{
            let current = root
            while(current.next !== null && current.next.val < newVal){
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    
    }

    return root
    
}
function printList(node) {
    let current = node;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
let root = addSorted([400, 40, 4, 50, 450, 700, 5]) 
// 4
// 5
// 40
// 50
// 400
// 450
// 700
printList(root)