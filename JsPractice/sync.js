//sync vs async behaviour:
//1 -- done -- > fetch 100 users from the API/DB -- 20 secs
//2 -- done -- display user profile -- 10 secs
//3 -- done
//4 -- done
//end
///blocking behaviour for the user

// console.log("start");
// for(let i=0; i<30000; i++){
//     console.log(i);
// }
// console.log("end");

//Async:
//1 -- fetch user -- 100 users are coming from API/DB --> 20 secs --> callback function: Promises
//2 -- display user profile -- 10 secs
//3 -- fetch order info -- 5 secs
//4 -- do something else
console.log("start");
setTimeout(()=>{
    console.log("time out is done");
}, 10000);
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
