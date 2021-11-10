var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        console.log(dp[i]);
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  if (dp[amount] != Infinity) {
    return dp[amount];
  } else {
    return -1;
  }
};
