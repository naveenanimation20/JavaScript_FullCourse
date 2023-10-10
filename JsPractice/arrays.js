// Declaration of an array
let myArray = []; // An empty array
 

let lang = ["Java", "Python", "JS"];
//1. push:
lang.push("Ruby", "HTML");
console.log(lang);

//2. pop:
let numbers = [1, 2, 3, 4, 5];// An array with numbers
numbers.pop();
console.log(numbers);

//3. shift:
let fruits = ["apple", "banana", "orange"]; // An array with strings
let fistFruit = fruits.shift();
console.log(fistFruit);
console.log(fruits);

//4. unshift:
let colors = ['red', 'green', 'black', 'white'];   //An array containing two elements
console.log(colors.length);
colors.unshift('blue', 'pink');
console.log(colors);
console.log(colors.length);

//5. splice:
let animals = ['dog','cat','bird','fish'];    // Array contains four string values
animals.splice(1,2,'bear','elephant');
console.log(animals);

//6. slice:
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4);//(]
console.log(newPop);

//7. concat:
let fr = ["apple", "banana", "orange"];;
let num = [1,2,3,4];
let mixedArray = fr.concat(num);
console.log(mixedArray);

//8. indexOf:
let color = ["black", "red", "green", "blue", "red"];
let indexRed = color.indexOf("red");
console.log(indexRed);
let naveenIndex = color.indexOf("naveen");
console.log(naveenIndex);

//2nd red index:
let redSecondIndex = color.indexOf("red", color.indexOf("red")+1);
console.log(redSecondIndex);

//9. includes:
let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller", "naveen");
console.log(flag);

//10. forEach:
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})
