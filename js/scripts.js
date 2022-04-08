Pizza.prototype.getPrice = function() {
  const price = 10
  if (this.pizzaSize === "medium") {
    if (this.toppings === "cheese") {
      console.log(price + 6);
    } else {
      console.log(price + 7);
    }
  } else if (this.pizzaSize === "large")  {
    if (this.toppings === "cheese") {
      console.log(price + 11);
    } else {
      console.log(price + 12);
    }
  } else if (this.pizzaSize === "xlarge") {
    if (this.toppings === "cheese") {
      console.log(price + 15);
    }
  }
}


function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings; 
}




