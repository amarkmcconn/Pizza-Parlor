Pizza.prototype.getPrice = function() {
  const price = 10
  if (this.pizzaSize === "medium") {
    if(this.toppings === "cheese") {
      console.log(price + 6)
    }
  } else  {
    return mediumPizza + 1;
  }
}


function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings; 
}




// Pizza.prototype.getPrice = function() {
//   const mediumPizza = 15;
//   if (this.pizzaSize === "medium" && this.toppings === ["cheese", "pepperoni"]) {
//     console.log(mediumPizza + 2);
//   }
// }