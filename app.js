const fs = require("fs");

fs.readFile("Object.json", "utf8", (err, data) => {
  inputData = data;
  console.log(inputData);
})