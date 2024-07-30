const { readFile, writeFile } = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'temporary', 'fileB.txt')

  writeFile(
    filePath,
    `Async line 1\n`,
    { flag: 'a' },
    (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log(`Task 1 completed`);

        writeFile(
          filePath,
          `Async line 2\n`,
          { flag: 'a' },
          (err) => {
            if(err) {
              console.log(err)
            } else {
              console.log(`Task 2 completed`);   

              writeFile(
                filePath,
                `Async line 3\n`,
                { flag: 'a' },
                (err) => {
                  if(err) {
                    console.log(err)
                  } else {
                    console.log(`Task 3 completed`);   
                    
                  }
                }
              )
              
            }
          }
        )
      }
    }
  )
// console.log(readFile(filePath, "utf8"))
