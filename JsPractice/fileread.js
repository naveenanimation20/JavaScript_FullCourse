const fs = require('fs/promises'); // Import the fs.promises module

// Define a function to read a file and return a Promise
function readFilePromise(filePath) {
  return fs.readFile(filePath, 'utf-8');
}

// Usage example
const filePath = 'sample1.txt'; // Replace with the path to your file

readFilePromise(filePath)
  .then(content => {
    console.log('File content:', content);
  })
  .catch(error => {
    console.error('Error reading the file:', error);
  });
