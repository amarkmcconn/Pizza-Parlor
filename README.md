```javascript

Describe Pizza()
Test 1:
"It should return a Pizza object with blank properties"
Code: let myPizza = new Pizza();
Expected Output: Pizza {pizzaSize: undefined, toppings: undefined}

Test 2: 
"It should return a Pizza object with two properties for size and toppings"
Code: let myPizza = new Pizza ("medium", ["cheese", "pepperoni"]);
Expected Output: Pizza { size: "medium", toppings: ["cheese", "pepperoni"], }

Describe Pizza.prototype.getPrice = function()

Test 1:
"It should return a Pizza object with two properties for size and topping and price of 16"
Code: 
let myPizza = new Pizza("medium", "cheese");
myPizza.getPrice();
Expected Output: 
16

Test 2:
"It should return a Pizza object with two properties for size and topping and price of 17"
Code: 
let myPizza = new Pizza ("medium", ["cheese", "pepperoni"]);
myPizza.getPrice();
Expected Output: 
17

Test 3:
"It should return a Pizza object with two properties for size and topping and price of 21"
Code: 
let myPizza = new Pizza ("large", "cheese");
myPizza.getPrice();
Expected Output: 
21

Test 4:
"It should return a Pizza object with two properties for size and topping and price of 22"
Code: 
let myPizza = new Pizza ("large", ["cheese", "pepperoni"]);
myPizza.getPrice();
Expected Output: 
22

Test 5:
"It should return a Pizza object with two properties for size and topping and price of 25"
Code: 
let myPizza = new Pizza ("xlarge", "cheese");
myPizza.getPrice();
Expected Output: 
25

Test 6:
"It should return a Pizza object with two properties for size and topping and price of 26"
Code: 
let myPizza = new Pizza ("xlarge", ["cheese", "pepperoni"]);
myPizza.getPrice();
Expected Output: 
26

Test 7:
"It should return a Pizza object with two properties for size and topping and price of 18"
Code: 
let myPizza = new Pizza ("medium", ["cheese", "pepperoni", "pinneapple"]);
myPizza.getPrice();
Expected Output: 
18

Test 8:
"It should return a Pizza object with two properties for size and topping and price of 23"
Code: 
let myPizza = new Pizza ("large", ["cheese", "pepperoni", "pinneapple"]);
myPizza.getPrice();
Expected Output: 
23

Test 9:
"It should return a Pizza object with two properties for size and topping and price of 27"
Code: 
let myPizza = new Pizza ("xlarge", ["cheese", "pepperoni", "pinneapple"]);
myPizza.getPrice();
Expected Output: 
27
```
# _Pizza Parlor_
#### By _**Mark McConnell**_
#### _This is a web application that allows user to order a pizza_
## Technologies Used
* _HTML_
* _CSS_
* _jQuery_
* _JavaScript_
## Description
_This is a website for a pizza company where a user can choose one or more individual toppings and a size to order a pizza and see the final cost._
## Setup/Installation Requirements
* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_
## Known Bugs

* _No known issues at this time_

## License

_If you run into any issues or have questions, ideas or concerns.  Please email me @mark-programming1@gmail.com or make a contribution to the code._

Copyright (c) _2022_ _Mark McConnell_
