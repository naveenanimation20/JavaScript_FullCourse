function checkDayOfWeek(dayNumber){
    let day;
    switch (dayNumber) {
            case 0:
            day = "Sunday";
            break;
            case 1:
            day = "Monday";
            break;
            case 2:
            day = "Tuesday";
            break;
            case 3:
            day = "Wednesday";
            break;
            case 4:
            day = "Thursday";
            break;
            case 5:
            day = "Friday";
            break;
            case 6:
            day = "Saturday";
            break;
    
        default:
            console.log("Invalid day");
            break;
    }

    return day;
}

console.log(checkDayOfWeek(4));
// console.log(checkDayOfWeek(3));
// console.log(checkDayOfWeek(6));
// console.log(checkDayOfWeek(10));




//
let browser = "chrome";
switch (browser) {
    case "chrome":
        console.log("launch chrome");
        break;
    case "firefox":
        console.log("launch firefox");
        break;  
    case "edge":
        console.log("launch edge");
        break;      

    default:
        console.log("plz pass the right browser...." + browser);
        break;
}

//multi env: dev, qa, stage, uat, prod
//multi user: admin, customer, seller, distributor, cat manager