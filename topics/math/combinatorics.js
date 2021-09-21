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
solve([0,0,2])