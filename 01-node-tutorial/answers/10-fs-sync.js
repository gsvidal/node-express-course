const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'temporary', 'fileA.txt')

for(let i = 0; i < 3; i++) {
  writeFileSync(
    filePath,
    `Sync line ${ i + 1 }\n`,
    { flag: 'a' }
  )
}
console.log(readFileSync(filePath, "utf8"))
