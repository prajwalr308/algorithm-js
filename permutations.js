function getPermutations(array) {
    // Write your code here.
      let permutations=[]
      permutationHelper(array,[],permutations)
      return permutations
  }
function permutationHelper(arr,currentPerm,perms){
      if(!arr.length && currentPerm.length){
          perms.push(currentPerm)
      }else{
          for(let i=0;i<arr.length;i++){
              const newArr=arr.slice(0, i).concat(arr.slice(i+1));
              const newPerm=currentPerm.concat([arr[i]])
              permutationHelper(newArr,newPerm,perms)
          }
      }
  }
  getPermutations([1,2,3])