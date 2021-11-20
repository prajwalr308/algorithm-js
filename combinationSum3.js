var combinationSum3 = function(k, n) {
    res=[]
    const arr = Array.from({length: 9}, (_, index) => index + 1);
    console.log(arr)
    const dfs=function(curr,target,index){
        if(target==0&&curr.length==k){
            res.push(curr.slice())
        }else{
            
        }
        if(target<0){
            return
        }
       
        for(let i=index;i<arr.length;i++){
       
         
            dfs([...curr,i],target-arr[i],i+1)
          

        }
    }
    dfs([],n,1)
    return res
};
console.log(combinationSum3(2,18))