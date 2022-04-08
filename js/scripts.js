//Business Logic ---

Pizza.prototype.getPrice = function() {
  const price = 10
  if (this.pizzaSize === "medium") {
    if (this.toppings === "cheese") {
      return price + 6;
    } else if (this.toppings === ["cheese", "pepperoni"]) {
      return price + 7;
    } else {
      return price + 8;
    }
  } else if (this.pizzaSize === "large")  {
    if (this.toppings === "cheese") {
      return price + 11;
    } else if (this.toppings === ["cheese", "pepperoni"]) {
      return price + 12;
    } else {
      return price + 13;
    }
  } else if (this.pizzaSize === "xlarge") {
    if (this.toppings === "cheese") {
      return price + 15;
    } else if (this.toppings === ["cheese", "pepperoni"]) {
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
    let ele = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      ele.push($(this).val());
    })
    let myPizza = new Pizza(pizzaSize, ele)
    let myPizzaPrice = myPizza.getPrice();
    console.log(myPizzaPrice);
    
  });
});    



// [(document.querySelector("#topping1").checked), (document.querySelector("#topping2").checked), (document.querySelector("#topping3").checked)])

// if (document.querySelector("#topping1").checked); {
    //   topping1 = "cheese"  
    // if (document.querySelector("#topping2").checked);
    //   topping2 = "pepperoni"  
    // if (document.querySelector("#topping2").checked);
    //   topping3 = "pinneapple"
    // }
    // displayPizzaOrder(myPizza);



    // let topping1 = $("#topping1").is("checked:");
    // let topping2 = $("#topping2").is("checked:");
    // let topping3 = $("#topping3").is("checked:");

