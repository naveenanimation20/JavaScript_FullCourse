// Define an object with chainable methods
// const calculator = {
//     value: 0,
    
//     // A method to add a number
//     add(x) {
//       this.value += x;
//       return this; // Return the modified object
//     },
    
//     // A method to subtract a number
//     subtract(x) {
//       this.value -= x;
//       return this; // Return the modified object
//     },
    
//     // A method to multiply by a number
//     multiply(x) {
//       this.value *= x;
//       return this; // Return the modified object
//     },
    
//     // A method to divide by a number
//     divide(x) {
//       this.value /= x;
//       return this; // Return the modified object
//     },
    
//     // A method to get the current value
//     getValue() {
//       return this.value;
//     }
//   };
  
//   // Example of method chaining
//   const result = calculator
//     .add(5)
//     .multiply(2)
//     .subtract(10)
//     .divide(3)
//     .getValue();
  
//   console.log(result); // Outputs: 0
  



  const fetchData = async () => {
    try {
      // Simulate an asynchronous operation, e.g., fetching data from an API
      const response = await fetch('https://reqres.in/api/users');
      // Check if the HTTP request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse the JSON response
      const data = await response.json();
      // Do something with the data
      //console.log(data);
      return data;
    } catch (error) {
      // Handle errors that may occur during the async operation
      console.error('An error occurred:', error);
    }
  };
  
  // Call the async function
  fetchData().then(data=>{
    console.log(data);
  }).catch((error)=>{
    console.log("Error", error);
  });
  