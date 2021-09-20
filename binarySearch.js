function binarySearch(array, target) {
    // Write your code here.
      return helper(array,target,0,array.length-1)
      
  }
  
  function helper(array,target,left,right){
      if(left>right){
          return -1
      }
      const middle = Math.floor((left+right)/2);
      const midValue=array[middle];
      if(target===midValue){
          return middle;
      }else if(target<midValue){
          return helper(array,target,left,middle-1)
          
      }else {
          return  helper(array,target,middle+1,right)
      }
  }