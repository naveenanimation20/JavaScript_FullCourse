//1. map:
let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) => e * 2);
console.log(doubleNumbers);//[2,4,6]

// F -> C
//(F-32) * (5/9)
let fahTemp = [32,68,86,104,212];

function fahToCel(fah){
    return (fah - 32) * (5/9);
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

//2. filter:
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);


let employee = [
    {name:"John", age:30, gender:"male" },
    {name:"Bob", age:35, gender:"male" },
    {name:"Lisa", age:40, gender:"female" },
    {name:"Priya", age:25, gender:"female" },
    {name:"Peter", age:55, gender:"male" },
];

let femaleEmpOver30 = employee.filter((emp) => {
    return emp.gender === "female" && emp.age > 20;
});
console.log(femaleEmpOver30);

//3. reduce:
let numb = [1,2,3,4,5]; //15
let sum = numb.reduce((acc,num) => acc+num, 0);
console.log(sum);
//1st --> 0+1 = 1
//2nd --->1+2 = 3
//3rd ---->3+3 = 6
//4th--->6+4=10
//5th--->10+5 = 15

//max number in the array:
let top = [10,5,25,8,30,15]; //30
let maxNum = top.reduce((max,num) => {//max = 30, num = 8
    if(num > max){//8>30
        return num;//30
    }
    else{
        return max;//30
    }
}, top[0]);

console.log(maxNum);

//cart : name, price
let cartItems = [
    {name:"Jeans", price:500},
    {name:"Shirt", price:300},
    {name:"Shoes", price:1000},
    {name:"Hat", price:100},
    {name:"Tshirt", price:400},
];


let totalCost = 
cartItems.reduce((total, item) => total + item.price, 0);
console.log(totalCost);
