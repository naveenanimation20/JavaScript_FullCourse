const randomNumberPromise = new Promise((resolve, reject) => {

    //async operation:
    setTimeout(()=>{
        const randomValue = Math.random();
        if(randomValue > 0.5){
            resolve(randomValue);
        }else{
            reject(new Error("value is too small!"));
        }

    }, 2000);//delay of 2 secs
});

randomNumberPromise
        .then(result => {//handler
            console.log("promise is fulfilled with value: " , result);
        })
        .catch(error =>{//handler
            console.error("promise is rejected with error: ", error);
        });
