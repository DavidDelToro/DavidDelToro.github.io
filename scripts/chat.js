const fs = require('fs');

const file_reader=fs.readFileSync("text.txt", "utf8");
console.log(file_reader);

