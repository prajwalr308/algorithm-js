function solve(cards) {
    // Write your code here
  let numberOfWays = 1;
    for(let i = 0; i < cards.length; i++) {
        console.log(cards)
        let ways = Math.max(0, helper(cards, i) - i);
     
        numberOfWays *= ways;
    }
   
    console.log(numberOfWays)
    return numberOfWays
}
function helper(c,max){
     let count=0;
  
   for(const number of c){

        if(number <= max) count++;
     
   }

     return count;
}
solve([0,0,1,4,1])


function pickingCards(c){
  let finalarr=[]
 
  let fillArr=[...Array(c.length).keys()].map(x => ++x)
  console.log(fillArr)
  let i=c.length-1;
while(i>=0){
     
          console.log(fillArr[i])
          let perm=fillArr[i]-c[i]
         
             finalarr.push(perm)
              i--
  }
 
const reducer =finalarr.reduce( (previousValue, currentValue) => previousValue * currentValue);
return reducer
}
console.log(pickingCards([0,0,1,2]))