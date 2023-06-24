'use strict';

const assert = require('assert').strict;
const change_count = require('../oturi2/oturi');

it("bill=620, payment=1000 のとき、お釣りは7枚である", async () => {
  const bill = 620;
  const payment = 1000;
  assert.strictEqual(change_count(bill, payment), 7);
});

it("bill=2430, payment=3000 のとき、お釣りは4枚である", async () => {
  const bill = 2430;
  const payment = 3000;
  assert.strictEqual(change_count(bill, payment), 4);
});

it("bill=2430, payment=5000 のとき、お釣りは6枚である", async () => {
  const bill = 2430;
  const payment = 5000;
  assert.strictEqual(change_count(bill, payment), 6);
});

it("bill=2430, payment=10000 のとき、お釣りは7枚である", async () => {
  const bill = 2430;
  const payment = 10000;
  assert.strictEqual(change_count(bill, payment), 7);
});