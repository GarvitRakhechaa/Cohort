// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj
  
    obj2 = JSON.parse(JSON.stringify(obj))
    return obj2
  
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = deepClone(obj);
    process.stdout.write(JSON.stringify(result));
  });