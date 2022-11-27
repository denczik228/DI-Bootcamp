//Remove Banana from the array
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift("Banana");
console.log(fruits);

///Sort the array in alphabetical order.
fruits.sort();
console.log(fruits)

//Add “Kiwi” to the end of the array.
fruits.push("Kiwi");

//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0, 1);
console.log(fruits);

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();
console.log(fruits);

//------------exercise 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);



