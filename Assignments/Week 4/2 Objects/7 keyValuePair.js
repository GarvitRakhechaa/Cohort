// You just need to implement the objectToArray function
function objectToArray(obj) {
    return Object.entries(obj)
    // Convert the object into an array of key-value pairs
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = objectToArray(obj);
    process.stdout.write(JSON.stringify(result));
  });