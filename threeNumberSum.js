function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let triarray = [];
  for (let i = 0; i < array.length; i++) {
    currentNum = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = currentNum + array[left] + array[right];
      if (targetSum == currentSum) {
        triarray.push([currentNum, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triarray;
}
