// fetching user data from an API
// const fetchUserData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const userData = { id: 1, name: "John Doe", email: "john@example.com" };
//         resolve(userData);
//       }, 1000);
//     });
//   };
  
//   // fetching user's posts based on user data
//   const fetchUserPosts = (userId) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const userPosts = [
//           { id: 101, title: "Post 1", content: "This is the first post" },
//           { id: 102, title: "Post 2", content: "This is the second post" }
//         ];
//         resolve(userPosts);
//       }, 1500);
//     });
//   };
  
//   // Chaining promises to fetch user data and user posts
//   fetchUserData()
//     .then(user => {
//       console.log("User data:", user);
//       return fetchUserPosts(user.id); // Return a promise for the next step in the chain
//     })
//     .then(posts => {
//       console.log("User posts:", posts);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
  




// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//            const t = Math.random(); 
//            if (t > 0.3){
//             resolve(t);
//            }
//            else{
//             reject("some error");
//            }
//     }, 1000);
// });

// myPromise
//     .then(result =>{
//         console.log("promise fulfilled " ,result );
//     })
//     .catch(error =>{
//         console.log('promise rejected ' + error ) ;
//     })




    
        