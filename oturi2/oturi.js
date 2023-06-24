// 問題
// x 円のお会計に対して、N円で支払ったときの最小お釣り枚数はいくつか
// ただし、札も一枚と数える
// 0 < x < N, 支払いは 1000, 5000, 10000 円札で行う
// Nは手持ちのうちお釣り枚数が最小となるように支払う（1350円に対して、3000円の支払いはなし。5000円はOK）

// 例1
// 1350円のお会計に対して、5000円札で支払った場合
// 3650円がお釣りで、1000*3+500*1+100*1+50*1 で6枚と数える

// 例2
// 1350円のお会計に対して、2000円(1000円札2枚)で支払った場合
// 650円がお釣りで、500*1+100*1+50*1 で3枚と数える

'use strict';

function change_count(bill, payment) {
  const coins = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  let diff = payment - bill;
  let count = 0;

  for(let i = 0; i < coins.length; i++) {
    const div = Math.floor(diff / coins[i]);
    const mod = diff % coins[i];
    count = count + div;
    diff = mod;
  }

  return count;
}

change_count(process.argv[2], process.argv[3]);

module.exports = change_count;