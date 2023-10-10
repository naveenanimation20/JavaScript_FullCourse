const square = num => num * num;
const result = square(5);
console.log(result);

const mesg = () => 'hello JS';
console.log(mesg());

const add = (a,b) => a+b;
console.log(add(4,5));


const getFullName = (person) => `${person.firstName} ${person.lastName}`

const person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}

const fullName = getFullName(person);
console.log(fullName);

//
const greet = (username='guest', age=0) => `Hello, ${username}! you are ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet('Tom', 30);
console.log(g2);

//rest parameters ... varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
const total = sum(1,2,3,4,5);
console.log(total);

//
const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('other details:', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

//max number using Math
const findMaxNumber = (a,b,c) => {
    return Math.max(a,b,c);
};

const maxValue = findMaxNumber(10,30,50);
console.log(maxValue);












