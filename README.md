```javascript

Describe Pizza()
Test 1:
"It should return a Pizza object with blank properties"
Code: let myPizza = new Pizza();
Expected Output: Pizza {pizzaSize: undefined, toppings: undefined}

Test 2: 
"It should return a Pizza object with two properties for size and toppings"
Code: let myPizza = new Pizza(["cheese", "pepperoni"], "medium");
Expected Output: Pizza { size: "medium" toppings: ["cheese", "pepperoni"], }

Describe Pizza.prototype.getPrice = function(pizza)
Test 1:
"It should return a Pizza object with two properties for size and topping and price of 16"
Code: 
let myPizza = new Pizza("medium", "cheese");
myPizza.getPrice();
Expected Output: 
16


```
# _Mark's Pizza Parlor_
#### By _**{List of contributors}**_
#### _{Brief description of application}_
## Technologies Used
* _List all_
* _the major technologies_
* _you used in your project_
* _here_
## Description
_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_
## Setup/Installation Requirements
* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_
## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _2022_ _Mark McConnell_
