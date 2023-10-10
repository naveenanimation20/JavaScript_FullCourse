//"pyramid of doom" or "callback hell"

asyncFunction1((result1) => {
    asyncFunction2(result1, (result2) => {
      asyncFunction3(result2, (result3) => {
        asyncFunction4(result3, (result4) => {
          // More nested callbacks...
        });
      });
    });
  });

  


//better readability with Promises:
asyncFunction1()
  .then(result1 => asyncFunction2(result1))
  .then(result2 => asyncFunction3(result2))
  .then(result3 => asyncFunction4(result3))
  .then(result4 => {
    // Code here
  })
  .catch(error => {
    // Error handling
  });



// or using async-await:
async function myFunction() {
    try {
      const result1 = await asyncFunction1();//5
      const result2 = await asyncFunction2(result1);//10
      const result3 = await asyncFunction3(result2);
      const result4 = await asyncFunction4(result3);
      // Code here
    } catch (error) {
      // Error handling
    }
  }
  