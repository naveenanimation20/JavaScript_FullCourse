//1. find unique values from array: spread operator
const array = [1,2,3,2,3,2,5,6,2,7,7,7,7];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//2. int to string:
const num = 32;
const numStr = num + '';//'32'
console.log(numStr+10);//3210
//or
const numStr1 = String(num);//'32'
console.log(numStr1+10);

//3. float to int:
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

//4. check if a variable is a Number:
const value = '10';
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + ' is number');
}
else{
    console.log(value + ' is not a number');

}

//5. swap variable values:
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a,b);

//6. check if an Object has a property:
const person = {
    name:'John',
    age : 28,
}
if(person.hasOwnProperty('address')){
    console.log('person has property');
}

//7. remove falsy value from the array: (false, 0, "", null, undefined, NaN):
const values = [0,1,false,2,'',3,null,undefined,NaN,4];
const newVal = values.filter(Boolean);
console.log(newVal);

//8. String --> Uppercase, lower Case
const str ='Naveen Automation Labs';
const u1 = str.toUpperCase(); // NAVEEN AUTOMATION LABS
const l1 = str.toLowerCase();//naveen automation labs
console.log(u1);
console.log(l1);

//9. check if Array contains a value:
const lang = ['java', 'javascript', 'python', 'ruby'];
if(lang.includes('javascript')){
    console.log('found')
}

//10. check if an Array is Empty:
const empty = [];
if(empty.length === 0){
    console.log("Array is empty");
}

//11. generate a random number:
const min = 10;
const max=  200 ;
const randomNumber = Math.floor(Math.random() * (max - min + 1))+ min;
console.log(`Random Number :  ${randomNumber}`);

//12. String to number:
const strNumber = '32.0';
const x1 = parseFloat(strNumber);
console.log(x1);

//13. Join array elements into a String:
const words = ['Hello', 'Naveen'];
const sentence = words.join(' ');
console.log(sentence);

//14. get object proeprty:
const user = {
    name:'Tom',
    age: 25,
    dob: '01-01-1995'
};

console.log(user['name']);
console.log(user['dob']);

//15. clone an array or object:
const marks = [10,20,30,50,66,70];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const userDuplicate = { ...user };//spread operator
console.log(userDuplicate);

//16. convert object to array:
const employee = {
    name:'Tom',
    age: 25,
    dob: '01-01-1995'
};

//a. keys array:
const keysArray = Object.keys(employee);
console.log(keysArray);

//a. values array:
const valuesArray = Object.values(employee);
console.log(valuesArray);

//c. key-value array:
const keyValArray = Object.entries(employee);
console.log(keyValArray);


//17. get current date and time:
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//18. check variable is defined:
let i;
if(typeof i === 'undefined'){
    console.log('variable not defined');
}

//19. truncate an array:
const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

//20. Last item in array:
const pop = [0,1,2,3,4,5,6,7];
const n1 = pop.slice(-1);
console.log(n1);