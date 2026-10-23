const fs = require('node:fs');
const v = JSON.parse(fs.readFileSync('values.json'));
const c = JSON.parse(fs.readFileSync('c.json'));
const d = JSON.parse(fs.readFileSync('d.json'));
if (v.a !== 1 || v.b !== 2 || c !== v.a + v.b || d !== v.a * 10) {
  console.error({v, c, d}); process.exit(1);
}
console.log('Final fixture: a=1, b=2, c=3, d=10');
