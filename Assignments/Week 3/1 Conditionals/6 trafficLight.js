// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    switch(color.toLowerCase()){
      case "red":
        return "Stop"
        break
      case "yellow":
        return "Slow Down"
        break
      case "green":
        return "Go"
        break
      default:
        return "Invaild Color"
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { color } = JSON.parse(input);
    const result = trafficLightAction(color);
    process.stdout.write(JSON.stringify(result));
  });