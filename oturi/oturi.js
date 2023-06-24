'use strict';

// 650円のお会計に対して、1000円支払うとお釣りは何枚か？
// x 円のお会計に対して、1000円支払うとお釣りは何枚か？
// 0 < x <= 1000

function count_oturi(siharai, payment) {
  let diff = payment - siharai;
  const coins = [500, 100, 50, 10, 5, 1];
  let mai = 0;

  for(let i = 0; i < coins.length; i++) {
    const div = Math.floor(diff / coins[i]);
    const mod = Math.floor(diff % coins[i]);
    mai += div;
    diff = mod;
  }

  return mai;
}

console.log(count_oturi(process.argv[2], process.argv[3]));

module.exports = count_oturi;