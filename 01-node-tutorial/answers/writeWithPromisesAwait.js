const { writeFile, readFile } = require("fs").promises;

const path = require('path')

const filePath = path.join(__dirname, 'temporary', 'temp.txt')

const writer = async () => {
  try {
    await writeFile(filePath, "This is the first line.\n");
    await writeFile(filePath, "This is the second line.\n", { flag: "a" });
    await writeFile(filePath, "This is the third line.\n", { flag: "a" });
  } catch(error) {
    console.error("Error writing to file:", error)
  }
}

async function reader() {
  try {
    const data = await readFile(filePath, "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error reading from file:", error)
  }
}

async function readWrite () {
  await writer();
  await reader();
}

readWrite();