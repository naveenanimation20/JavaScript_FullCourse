// function checkAge(age){
//     if(age >=18){
//         console.log("You are old enough to vote.");
//     }
//     else{
//         console.log("Sorry, you must be 18 or older to vote");
//     }
// }

// checkAge(10);
// checkAge(30);
// checkAge(0);

// //
// function checkNumber(number){
//     if(number > 0){
//         console.log('number is +ve');
//     }
//     else if(number < 0 ){
//         console.log('number is -ve') ;
//     }
//     else{
//         console.log('zero number found.');
//     }
// }

// checkNumber(10);
// checkNumber(-9);
// checkNumber(0);

// //nested if-else:
// function checkGrade(score){
//     let grade;
//     if(score >=90){
//         grade = 'A';
//     }
//     else{
//         if(score >=80){
//             grade ='B'
//         }
//         else{
//             if (score>=70) {
//                 grade='C';
//             }
//             else{
//                 grade = 'D'
//             }
//         }
//     }
// console.log(grade);    
// }

// checkGrade(90);
// checkGrade(75);
// checkGrade(35);
// checkGrade(100);
// checkGrade(85);

//
// let browser = "chrome";
// if( browser == "chrome"){
//     console.log("launch chrome");
// }
// if( browser == "edge"){
//     console.log("launch edge");
// }
// if( browser == "firefox"){
//     console.log("launch firefox");
// }
// else{
//     console.log("plz pass the right browser....");
// }

//if -elseif
let browser = "opera";
if( browser == "chrome"){
    console.log("launch chrome");
}
else if( browser == "edge"){
    console.log("launch edge");
}
else if( browser == "firefox"){
    console.log("launch firefox");
}
else{
    console.log("plz pass the right browser....");
}
