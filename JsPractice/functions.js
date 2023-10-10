//1. function decalration:

function add(a,b){
    return a+b;
}

function print(){
    console.log("hi this is JS");
}

const sum = add(5,6);
console.log(sum);

print();

//2. Function Expression: Annonymous function
const multiply = function(x, y){
    return x*y;
}
const mul = multiply(5,6);
console.log(mul);

//3. Arrow function expression:Annonymous function
const divide = (t1,t2) => t1/t2;
const div = divide(20,2);
console.log(div);

//4. Function Constructor:
const substract = new Function('a', 'b' , 'return a - b;');
const subs = substract(10,2);
console.log(subs);

//5. IIFE(Immediately Invoked Function Expression):
(function(){
    console.log("server is up n running on port 3000");
})();


//6. Generator Function:
//function* and yield keyword
function* generateNumbersSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Annonymous function:
//no specific name
// const numbers = [1,2,3,4,5];
// const squareNumbers = numbers.map(function(e){
//     return e * e;
// });
// console.log(squareNumbers);

const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map((e) =>{
    return e * e;
});
console.log(squareNumbers);

//8. Recursive function:4 -> 4*3*2*1=24
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(100));


//9. Higher-Order Function:
function additon(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}

function operate(funcName, a, b){
    return funcName(a,b);
}

const s = operate(multiplication, 4, 5);
console.log(s);