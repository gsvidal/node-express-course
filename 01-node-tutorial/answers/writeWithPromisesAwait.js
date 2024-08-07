const { writeFile, readFile } = require("fs").promises;

const write = async () => {
  const path = require('path')

  const filePath = path.join(__dirname, 'temporary', 'temp.txt')

for(let i = 0; i < 3; i++) {
  await writeFile(
    filePath,
    `Sync line ${ i + 1 }\n`,
    { flag: 'a' }
  )
}

}

const reader = async () => {
  console.log(await readFile(filepath, "utf8"));
}


write()
      .then((result) =











