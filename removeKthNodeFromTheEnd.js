class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let counter=1;
      let first=head;
      let second=head;
      
      while(counter<=k){
          second=second.next;
          counter++;
      }
      if(second ===null){
          head.value=head.next.value;
          head.next=head.next.next;
          return head;
      }
      while(second.next!==null){
          second=second.next;
          first=first.next;
          
      }
      first.next=first.next.next
  }
  