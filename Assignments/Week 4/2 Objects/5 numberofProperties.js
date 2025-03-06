// You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    if(typeof user == "object"){
      let numberofProperties = Object.keys(user).length
      if(numberofProperties){
        return numberofProperties
      }
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { user } = JSON.parse(input);
    const result = countProperties(user);
    process.stdout.write(JSON.stringify(result));
  });