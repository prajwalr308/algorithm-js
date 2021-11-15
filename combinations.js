function main(m,n){
   
    let result =combination(m,n);
    return result;
    }

function combination(max,n,res=[],arr=[],index=1){

   
    
    if(arr.length===n){
        
        res.push(arr);
        return [];
    }else{
        while(index<=max){
           
            
            combination(max,n,res,[...arr,index],++index);
            
            console.log(arr);
           
        }
        return res
    }
    
}
console.log(main(4,2));