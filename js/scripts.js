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

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    // if (document.querySelector("#topping1").checked); {
    //   topping1 = "cheese"  
    // if (document.querySelector("#topping2").checked);
    //   topping2 = "pepperoni"  
    // if (document.querySelector("#topping2").checked);
    //   topping3 = "pinneapple"
    // }
    let myPizza = new Pizza(pizzaSize, [(document.querySelector("#topping1").checked), (document.querySelector("#topping2").checked), (document.querySelector("#topping3").checked)])
    let myPizzaPrice = myPizza.getPrice();
    console.log(myPizzaPrice);
    // displayPizzaOrder(myPizza);
  });
});    



