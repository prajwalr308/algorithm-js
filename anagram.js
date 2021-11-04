var isAnagram = function(s, t) {
    let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]+=1
        }else{
            obj[s[i]]=1
        }
    }
    for(let i=0;i<t.length;i++){
        if(obj[t[i]]){
            obj[t[i]]-=1
        }else{
            obj[t[i]]=1
        }
    }
    for(let i in obj){
        if(obj[i]!=0){
            return false
        }else{
            return true
        }
    }
};
console.log(isAnagram('anagram','nagaram'))