function isValidSubsequence(array, sequence) {
  // Write your code here.
  var j = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === sequence[j]) {
      j++;
    }
  }

  return j === sequence.length;
}


isValidSubsequence([1,5,2,3], [1,2,3])