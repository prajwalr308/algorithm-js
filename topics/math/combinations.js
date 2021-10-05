function comb(arr) {
    if(arr.length === 0) return [[]];
  


    
    let first = arr[0];
    let slicedArr=arr.slice(1);
    let combWithoutfirst=comb(slicedArr);
  let combWithfirst=[]
    combWithoutfirst.forEach(x=> {const combwithfirst=[...x,first]
    
    combWithfirst.push(combwithfirst)})
    console.log(combWithfirst);


    return [...combWithfirst,...combWithoutfirst]
}
console.log(comb([1,2,3,]));