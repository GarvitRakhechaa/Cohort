// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    // Celsius to Fahrenheit: °F = °C × 1.8 + 32
    // Fahrenheit to Celsius: °C = (°F - 32) / 1.8
    switch(scale){
        case "C":
            return (`${(value * 1.8) + 32}°F`)
            break
        case "F":
            return (`${(value - 32) /1.8}°C`)
            break
        default:
            return "Invalid Scale"
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { value, scale } = JSON.parse(input);
    const result = convertTemperature(value, scale);
    process.stdout.write(JSON.stringify(result));
  });