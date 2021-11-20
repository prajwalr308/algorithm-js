const combinationSum=function(candidates, target) {
    let res=[]
candidates.sort((a,b)=>a-b)
let dfs=function(curr,target,index){
if(target==0){
    res.push([...curr])
}
if(target<0){
    return 
}
prev=-1
for (let i = index; i < candidates.length; i++) {
    if(candidates[i]==prev){
        continue
    }
    curr.push(candidates[i])
    dfs(curr,target-candidates[i],i)
    curr.pop()
    pre=candidates[i]

}
}
dfs([],target,0)
return res

}