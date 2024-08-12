const { writeFile, readFile } = require("fs").promises;

const path = require('path')

const filePath = path.join(__dirname, 'temporary', 'tempThen.txt')
    
writeFile(filePath, "This is the first line with then.\n")
  .then(() => {
    return writeFile(filePath, "This is the second line with then.\n", { flag: 'a'});
  })
  .then(() => {
    return writeFile(filePath, "This is the third line with then.\n", { flag: 'a'});
    })
  .then(() => {
    return readFile(filePath, "utf8")
      .then((data) => {
        console.log(data); 
      })
  })
  .catch((error) => {
      console.error(error);
    })  
