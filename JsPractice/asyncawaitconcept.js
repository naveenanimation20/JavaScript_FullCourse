//async function without await

async function f1(){
    console.log("this is async function without await step");
    return 42; //return a promise(resolved) on top of 42
}

// f1()
// .then(result=>{
//     console.log(result);
// });

//async function without await but with error:
async function f2(){
    console.log('this is an async function with error');
    throw new Error("this is my error"); //return a promise(rejected)
}

// f2().catch(error =>{
//     console.log(`the error message ${error}`);
// })

//async function with a resolved/rejecte promise:
function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber < 0.5){
                resolve(randomNumber);
            }else{
                reject(new Error("wrong value error"));
            }
        }, 2000);
    })
}

//create async function which is calling getinfo()
async function getNumberInfo(){
   try{ 
   const result = await getInfo(); //async step
   console.log("Result: ", result);
   }
   catch(error){
    console.log("Error:", error);
   }
}

//call getNumberInfo():
getNumberInfo();

async function f3(){

    await f2();
}