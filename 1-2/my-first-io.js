const fs = require('fs')
const filePath = process.argv[2];

const buffer = fs.readFileSync(filePath, "utf8");
console.log(buffer.split("\n").length - 1);
