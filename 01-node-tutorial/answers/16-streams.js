
const path = require('path');

// Define the path to the big file
const filePath = path.join(__dirname, '../content/big.txt');
try {
  const stats = fs.statSync(filePath);
  console.log(`File size: ${stats.size} bytes`);
} catch (err) {
  console.error('Error getting file stats:', err);
}

// Create a read stream with specified highWaterMark and encoding
const stream = fs.createReadStream(filePath, {
    encoding: 'utf8',
    highWaterMark: 200 // Adjust this value to test different chunk sizes
});

let counter = 0;
dfkjdfdsf
// Handle the 'data' event to process each chunk
stream.on('data', (chunk) => {
    counter++;
    //console.log(`Chunk ${counter}:`, chunk);
});

// Handle the 'end' event to signal the end of the stream
stream.on('end', () => {
    console.log(`Stream ended. Total chunks received: ${counter}`);
});

// Handle the 'error' event to catch and log any errors
stream.on('error', (err) => {
    console.error('Stream error:', err);
});























