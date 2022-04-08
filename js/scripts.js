//Business Logic ---
// If i test my logic I get the correct values?????
Pizza.prototype.getPrice = function() {
  const mediumPizza = 15
  const largePizza = 20
  const xlargePizza = 24
  if (this.pizzaSize === "medium") {
    if (this.toppings === ("cheese", "pepperoni", "pinneapple")) {
      return mediumPizza + 3;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return mediumPizza + 2;
    } else {
      return mediumPizza + 1;
    }
  } else if (this.pizzaSize === "large")  {
    if (this.toppings === "cheese") {
      return largePizza + 1;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return largePizza + 2;
    } else {
      return largePizza + 3
    }
  } else if (this.pizzaSize === "xlarge") {
    if (this.toppings === "cheese") {
      return xlargePizza + 1;
    } else if (this.toppings === ("cheese", "pepperoni")) {
      return xlargePizza + 2;
    } else {
      return xlargePizza + 3
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
    $("#output").text(myPizzaPrice);
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

