// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items = []
}

ShoppingCart.prototype.addItem = function(price){
   this.items.push(price)
}

ShoppingCart.prototype.getTotalPrice = function(){
  let sum = 0 
  for(i = 0; i<this.items.length; i++){
    sum += this.items[i]
  }
  return sum
}

// Define addItem method on ShoppingCart's prototype

// Define getTotalPrice method on ShoppingCart's prototype

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});
