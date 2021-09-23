function power(a,b){
    if(b==0){
    return 1;
    }
    if(b==1){
        return a
    }
    let tmp=power(a,Math.floor(b/2));
    
    result=tmp*tmp;
    console.log(result)
    if(b%2==1){
      result *=a;
    }
    
    return result;
    }
    console.log(power(2,4))
    
    function power1(a,b){
        if(b==0){
        return 1;
        }
       else if(b==1){
            return a
        }else
         return power(a,b);
    }
    console.log(power1(2,3))