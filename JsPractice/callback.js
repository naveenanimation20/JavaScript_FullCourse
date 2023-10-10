//callback function
//async call/task -- once this task is completed -- then only callback function will be called

// //basic callback:
// function greet(name, callback){
//     console.log('Hello' + name);//normal/sync step/task , could be async call/api
//     callback();
// }

// //callback function
// function welcome(){
//     console.log('welcome!!!!');
// }

// greet('Naveen', welcome);



// //callback with async function:
// function printInfo(name, callback){
//     //async function/task/step:
//     setTimeout(function(){
//         console.log("printing info for " + name);
//         callback("plz call me back...");
//     }, 5000);//delay of 5000ms/5 sec
// }

// //callback
// function displayMessage(mesg){
//     console.log(mesg);
// }

// printInfo("Lisa", displayMessage);

//
function fetchUserData(userId, callback) {
    setTimeout(function () {
      const users = {
        1: { id: 1, name: "Naveen" },
        2: { id: 2, name: "Tom"},
      };
  
      const user = users[userId];
      if (user) {
        callback(null, user); 
      } else {
        callback("User not found", null);
      }
    }, 5000); // Simulating a delay of 1 second
  }

//callback function:
function handleUserData(error, user){
    if(error){
        console.error("Error :" , error);
    }else{
        console.log("User: " , user);
    }
}

fetchUserData(1, handleUserData);