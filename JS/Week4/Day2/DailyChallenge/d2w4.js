//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

function displayGroceries(groceries){
    const fr = groceries.fruits;
    fr.forEach(element => console.log(element));
}
displayGroceries(groceries);

function cloneGroceries() {
    let user = client;
    client = "Betty";
    console.log(user, client); // id depends on were we changing our variable and assign a values, on the first step user recieves a value of John, after that we changed it on Betty and it will only be valid at the block of function outside it will be John again!
    let shopping = groceries;
    shopping.totalPrice = 35;//because it gives a second name to the same object, not creates a new one, it allows to change all information inside uses two variables with a same effect;
    shopping.other.payed = false;//its the same, because two variables equal to the same object;
    console.log(shopping);
}
cloneGroceries()

