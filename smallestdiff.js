function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (left < arrayOne.length && right < arrayTwo.length) {
    let first = arrayOne[left];
    let second = arrayTwo[right];
    if (first < second) {
      current = second - first;
      left++;
    } else if (second < first) {
      current = first - second;
      right++;
    } else {
      return [first, second];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}
