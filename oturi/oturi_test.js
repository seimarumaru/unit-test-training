const assert = require('assert').strict;
const count_oturi = require('./oturi');

// 正常値/異常値/不安なところをテストする
// 支払いが0円のとき、お釣りは0枚になるか？とか

it("siharai=620, payment=1000のとき、お釣りは7枚である", async () => {
  const siharai = 620;
  const payment = 1000;
  assert.strictEqual(count_oturi(siharai, payment), 7);
});

it("siharai=973, payment=1000のとき、お釣りは5枚である", async () => {
  const siharai = 973;
  const payment = 1000;
  assert.strictEqual(count_oturi(siharai, payment), 5);
});

