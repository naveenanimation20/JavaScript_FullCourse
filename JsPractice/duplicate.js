const numbers = [1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7];
const names = ["Naveen", "Tom", "Lisa", "Naveen", "Peter", "Tom", "Raj", "Robby", "Tom"];

const uniqueNumbers = [... new Set(numbers)];
console.log(uniqueNumbers);

const uniqueNames = [... new Set(names)];
console.log(uniqueNames);


