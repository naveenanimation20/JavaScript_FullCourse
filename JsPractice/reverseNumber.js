//Reverse a Number:
//12345 --> 54321/10
function reverseNumber(num){//123
    //0-9: same number
    if(num>=0 && num<=9){
        return num;
    }

    let reverseNum = 0;
    while(num!=0){//1
        reverseNum = reverseNum * 10 + (num % 10);//32*10+(1%10)=>320+1=321
        num = Math.floor(num/10);//123/10=12/10=1/10=0.1=>0
    }
    return reverseNum;//321
}

console.log(reverseNumber(123));
// console.log(reverseNumber(9));
// console.log(reverseNumber(123));
// console.log(reverseNumber(1234598999901));
//more test cases:
console.log(reverseNumber(123));

// Creating a Map
var myMap = new Map();

// Adding key-value pairs
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key4", "value22");
myMap.set("key4", "value222");
myMap.set(null,"naveen");


// Accessing values
console.log(myMap.get("key1")); // Outputs: "value1"

// Checking if a key exists
console.log(myMap.has("key3")); // Outputs: false

// Removing a key-value pair
myMap.delete("key2");
console.log(myMap.get(null)); // Outputs: undefined, as "key2" has been removed
myMap.forEach(function(k,v){
    console.log(k+v);
});