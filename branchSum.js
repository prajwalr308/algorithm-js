function branchSums(root) {
    // Write your code here.
    const sums = [];
    calBranchSum(root, 0, sums);
    return sums;
  }
  function calBranchSum(node, runningSum, sums) {
    if (!node) return;
  
    let newRunningSum = runningSum + node.value;


    if (!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
    }
  
    calBranchSum(node.left, newRunningSum, sums);

    calBranchSum(node.right, newRunningSum, sums);
  
  }
  var a = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: { value: 9, left: null, right: null },
      },
      right: {
        value: 5,
        left: { value: 10, left: null, right: null },
        right: null,
      },
    },
    right: {
      value: 3,
      left: { value: 6, left: null, right: null },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  };
  branchSums(a);
  