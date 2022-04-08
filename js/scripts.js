//Business Logic ---

Pizza.prototype.getPrice = function() {
  const price = 10
  if (this.pizzaSize === "medium") {
    if (this.toppings === "cheese") {
      return price + 6;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return price + 7;
    } else {
      return price + 8;
    }
  } else if (this.pizzaSize === "large")  {
    if (this.toppings === "cheese") {
      return price + 11;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return price + 12;
    } else {
      return price + 13;
    }
  } else if (this.pizzaSize === "xlarge") {
    if (this.toppings === "cheese") {
      return price + 15;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return price + 16;
    } else {
      return price + 17;
    }
  }
}

function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings; 
}

//UI Logic ---
// function displayPizzaOrder()

let myPizza = {}

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    let topping1 = document.querySelector("#topping1").checked;
    let topping2 = document.querySelector("#topping2").checked;
    let topping3 = document.querySelector("#topping3").checked;
    if (topping1 === true && topping2 === true & topping3 === true) {
      let myPizza = new Pizza(pizzaSize, [topping1, topping2, topping3])
      }
    let myPizzaPrice = myPizza.getPrice();
    console.log(myPizzaPrice);
    // displayPizzaOrder(myPizza);
  })
})


