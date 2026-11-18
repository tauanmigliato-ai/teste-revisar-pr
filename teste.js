const assert = require("node:assert");
const { soma, multiplica } = require("./soma");
assert.strictEqual(soma(2, 3), 5);
assert.strictEqual(soma(-1, 1), 0);
assert.strictEqual(multiplica(2, 3), 6);
assert.strictEqual(multiplica(-2, 4), -8);
assert.strictEqual(multiplica(5, 0), 0);
console.log("ok");
