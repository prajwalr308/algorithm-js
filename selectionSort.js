function insertionSort(array) {
    // Write your code here.
      for(let i=0;i<array.length;i++){
          let j=i;
          while(j>0 && array[j]<array[j-1]){
  debugger;
              swap(j,j-1,array)
              j--;
          }
      }
      return array
  }
  function swap(i,j,array){
          const temp=array[i];
          array[i]=array[j]
          array[j]=temp
          
      }
  insertionSort([8, 5, 2, 9, 5, 6, 3])