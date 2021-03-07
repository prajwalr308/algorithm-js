function spiralTraverse(array) {
    // Write your code here.
      let result=[]
      let sRow=0;
      let eRow=array.length-1;
      let sCol=0;
      let eCol=array[0].length-1;
      
      while(sRow<=eRow && sCol<=eCol){
          for(let col=sCol;col<=eCol;col++){
              result.push(array[sRow][col]);
          }
          for(let row=sRow+1;row<=eRow;row++){
              result.push(array[row][eCol])
          }
          for(let col=eCol-1;col>=sCol;col--){
              if(sRow==eRow) break;
              result.push(array[eRow][col])
          }
          for(let row=eRow-1;row>sRow;row--){
              if(sCol==eCol) break;
              result.push(array[row][sCol]);
          }
         sRow++;
            eRow--;
            sCol++;
            eCol--;
        }
  return result;   	
  }