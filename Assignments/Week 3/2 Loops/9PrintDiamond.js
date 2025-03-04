function shinyDiamondRug(n) {
    let diamond = "";
  
    // Upper part
    for (let i = 1; i <= n; i++) {
      // Spaces
      for (let j = 1; j <= n - i; j++) {
        diamond += " ";
      }
  
      // Stars
      for (let j = 1; j <= 2 * i - 1; j++) {
        diamond += "*";
      }
  
      // New line
      if (i !== n) diamond += "\n";
    }
  
    // Lower part
    for (let i = n - 1; i >= 1; i--) {
      diamond += "\n"; // New line for lower part
  
      // Spaces
      for (let j = 1; j <= n - i; j++) {
        diamond += " ";
      }
  
      // Stars
      for (let j = 1; j <= 2 * i - 1; j++) {
        diamond += "*";
      }
    }
  
    return diamond;
  }
  
  // You just need to implement the shinyDiamondRug function
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = shinyDiamondRug(n);  // Call our function
    process.stdout.write(result);  // Output the result
  });
  