class ListNode {
    constructor(val) {
      this.val =  val;
  this.next = null
    }
  
  }
  
  
  
  var addTwoNumbers = function(l1, l2) {
      var dummyHead=new ListNode(0);
      var curr=dummyHead;
      
     var carry=0;
      let p=l1;
      let q=l2;
      var currentSum=0;
      while(p!=null||q!=null){
          let x=(p!=null)?p.val:0;
          let y=(q!=null)?q.val:0;
        
         currentSum=x+y+carry;
            carry=Math.floor(currentSum/10);
      console.log(carry);
         curr.next=new ListNode(currentSum%10);
        
        curr=curr.next;
       
          if(p!=null)p=p.next;
          if(q!=null)q=q.next;
         
      }
      if(carry>0){
          curr.next=new ListNode(carry)
          
      }
      return curr;
      
  };
  console.log(addTwoNumbers({val:2,next:{val:4,next:{val:3,next:null}}},{val:5,next:{val:6,next:{val:4,next:null}}}))