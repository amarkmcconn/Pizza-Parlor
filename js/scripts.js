//Business Logic ---

Pizza.prototype.getPrice = function() {
  const medium = 15
  const large = 20
  const xLarge = 24
  if (this.pizzaSize === "Medium") {
    if ((this.toppings.includes("Cheese")) && (this.toppings.includes("Pepperoni"))) {
      return(medium + 2);
    } else {
      return(medium + 1);
    }
  } else if (this.pizzaSize === "Large")  {
    if ((this.toppings.includes("Cheese")) && (this.toppings.includes("Pepperoni"))) {
      return (large + 2);
    } else {
      return(large + 1);
    }
  } else if (this.pizzaSize === "X-Large") {
    if ((this.toppings.includes("Cheese")) && (this.toppings.includes("Pepperoni"))) {
      return(xLarge + 2);
    } else {
      return(xLarge + 1);
    }
  }
}

function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

//UI Logic ---
function displayPizzaInfo(pizzaToDisplay) {
  let pizzaInfo = $("p#output");
  let htmlForPizzaInfo = pizzaToDisplay.pizzaSize + " " + pizzaToDisplay.toppings + " Pizza" + " " + "$" + pizzaToDisplay.getPrice();
  pizzaInfo.html(htmlForPizzaInfo);
}

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    let ele = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      ele.push($(this).val());
    })
    let myPizza = new Pizza(pizzaSize, ele)
    displayPizzaInfo(myPizza);
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

// function Pizzas() {
//   this.medium = 0;
//   this.large = 0;
//   this.xLarge = 0;
// }

// Pizza.prototype.getfinalPrice = function() {

// }

// Pizza.prototype.getPizzaPrice = function() {
//   if (this.pizzaSize === "medium") {
//     this.medium += 15
//   } else if (this.pizzaSize === "large") {
//     this.large += 20
//   } else if (this.pizzaSize === "xLarge") {
//     this.xLarge += 24
//   }
    
// }