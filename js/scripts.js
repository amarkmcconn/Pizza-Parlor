Pizza.prototype.getPrice = function() {
  const price = 10
  if (this.pizzaSize === "medium") {
    if (this.toppings === "cheese") {
      console.log(price + 6);
    } else if (this.toppings === ("cheese", "pepperoni")) {
      console.log(price + 7);
    } else {
      console.log(price + 8);
    }
  } else if (this.pizzaSize === "large")  {
    if (this.toppings === "cheese") {
      console.log(price + 11);
    } else if (this.toppings === ("cheese", "pepperoni")) {
      console.log(price + 12);
    } else {
      console.log(price + 13);
    }
  } else if (this.pizzaSize === "xlarge") {
    if (this.toppings === "cheese") {
      console.log(price + 15);
    } else {
      console.log(price + 16)
    }
  }
}


function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings; 
}




