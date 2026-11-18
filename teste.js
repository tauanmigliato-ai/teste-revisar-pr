const assert = require("node:assert");
const { soma, subtrai } = require("./soma");
assert.strictEqual(soma(2, 3), 5);
assert.strictEqual(soma(-1, 1), 0);
assert.strictEqual(subtrai(5, 3), 2);
assert.strictEqual(subtrai(3, 5), -2);
assert.strictEqual(subtrai(0, 0), 0);
console.log("ok");
