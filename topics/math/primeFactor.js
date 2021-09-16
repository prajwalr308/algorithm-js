function primeFactor(n) {
    var factor =[]
     var i = 2;
     while (i <= n) {
         if (n % i == 0) {
             n = n / i;
             factor.push(i);
         } else {
             i++;
         }
     }
     console.log(factor);
 }

////////////////////////////////
//best solution



function primeFactors(n) {
    // Clone n to avoid function arguments override.
    let nn = n;
  
    // Array that stores the all the prime factors.
    const factors = [];
  
    // Running the loop till sqrt(n) instead of n to optimise time complexity from O(n) to O(sqrt(n)).
    for (let factor = 2; factor <= Math.sqrt(nn); factor += 1) {
      // Check that factor divides n without a reminder.
      while (nn % factor === 0) {
        // Overriding the value of n.
        nn /= factor;
        // Saving the factor.
        factors.push(factor);
      }
    }
  
    // The ultimate reminder should be a last prime factor,
    // unless it is not 1 (since 1 is not a prime number).
    if (nn !== 1) {
      factors.push(nn);
    }
  
    console.log( factors);
  }