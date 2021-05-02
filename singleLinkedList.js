class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class List{
    constructor(){
        this.head=new Node("head");
       
        

    }
    find(item){
        var currNode=this.head;
        while(currNode.value!=item){
            currNode=currNode.next;
        }
        console.log("find",currNode)
        return currNode;
        
    }
    insert(value,item){
        var newNode= new Node(value);
  
        var current=this.find(item);
 
        newNode.next=current.next;
      
        current.next=newNode;
      

    }
    display(){
        var currNode=this.head;
        while(!(currNode.next==null)){
            console.log(currNode.next.value)
            currNode=currNode.next;
          
        }
      
    }

}
const test =new List();
test.insert(2,"head");
test.insert(1,2);
test.insert(3,1);
test.display()

