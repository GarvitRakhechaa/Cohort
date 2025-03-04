// You just need to implement the isLeapYear function
function isLeapYear(year) {
    if (year % 400 === 0) {
      return "Leap Year";
    } else if (year % 100 === 0) {
      return "Not a Leap Year";
    } else if (year % 4 === 0) {
      return "Leap Year";
    } else {
      return "Not a Leap Year";
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { year } = JSON.parse(input);
    const result = isLeapYear(year);
    process.stdout.write(JSON.stringify(result));
  });