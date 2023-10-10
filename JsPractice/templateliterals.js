const name = "Naveen";
//backticks => ``
const age = 30;
//vars: ${varname}
const mesg = `hello, my name is ${name} and age is ${age}`;
console.log(mesg);

const multiLine = `hi this is my javascript code 
 and im so happy
 and I want to be perfect in JS
 ohh yes!`;
console.log(multiLine);        

const a = 10;
const b = 20;
const result = `the addition of ${a} and ${b} is ${a+b}`;
console.log(result);


function getXpath(name){
    return `//input[@id='${name}']`;
}
console.log(getXpath('Tom\'s'));