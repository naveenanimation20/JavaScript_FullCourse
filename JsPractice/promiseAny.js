// It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise, similar to Promise.race(). 
// However, unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects; 
// instead, it waits until at least one promise fulfills/resolved.

const getMessage = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("get Message from API 1");
      }, 500);
    });
  };
  
  const getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error: User Data could not be fetched");
      }, 200);
    });
  };
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error: Product Info could not be fetched");
      }, 1000);
    });
  };
  
  Promise.any([getMessage(), getUsers(), getProducts()])
    .then(result => {
      console.log("First successful result:", result); // Will log the first resolved promise result
    })
    .catch(errors => {
      console.error("All promises rejected:", errors); // Will log all rejection reasons if all promises reject
    });
  