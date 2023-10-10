//Call Back Hell vs Promise Chaining

// Start the coffee machine.
// Grind coffee beans.
// Boil water.
// Pour boiling water into a cup.
// Add ground coffee to the cup.
// Stir the coffee.
// Enjoy your coffee!

function startCoffeeMachine() {
    return new Promise((resolve) => {
      console.log('Starting the coffee machine...');
      setTimeout(() => {
        console.log('Coffee machine is ready.');
        resolve('coffee machine is ready');
      }, 2000);
    });
  }
  
  function grindCoffeeBeans() {
    return new Promise((resolve) => {
      console.log('Grinding coffee beans...');
      setTimeout(() => {
        console.log('Coffee beans are ground.');
        resolve('ground coffee');
      }, 1000);
    });
  }
  
  function boilWater() {
    return new Promise((resolve) => {
      console.log('Boiling water...');
      setTimeout(() => {
        console.log('Water is boiled.');
        resolve('boiled water');
      }, 1500);
    });
  }
  
  function pourBoilingWaterIntoCup(boiledWater) {
    return new Promise((resolve) => {
      console.log('Pouring boiling water into a cup...');
      setTimeout(() => {
        console.log('Boiling water is in the cup.');
        resolve(boiledWater + ' in cup');
      }, 500);
    });
  }
  
  function addCoffeeToCup(groundCoffee) {
    return new Promise((resolve) => {
      console.log('Adding ground coffee to the cup...');
      setTimeout(() => {
        console.log('Coffee is added to the cup.');
        resolve('coffee is added to ' + groundCoffee);
      }, 500);
    });
  }
  
  function stirCoffee(coffeeInCup) {
    return new Promise((resolve) => {
      console.log('Stirring the coffee...');
      setTimeout(() => {
        console.log('Coffee is stirred.');
        resolve('enjoyable ' + coffeeInCup);
      }, 300);
    });
  }
  
  function enjoyCoffee(finalCoffee) {
    console.log('Enjoying my ' + finalCoffee);
  }
  

//promise chaining:
startCoffeeMachine((coffeeMachineStatus)=>{
    console.log(coffeeMachineStatus);
    return grindCoffeeBeans();
})
.then((groundCoffee)=>{
    console.log(groundCoffee);
    return boilWater();
})
.then((boliedWater)=>{
    console.log(boliedWater);
    return pourBoilingWaterIntoCup(boliedWater);
})
.then((waterInCup)=>{
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
})
.then((coffeeInCup)=>{
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
})
.then((finalCoffee)=>{
    enjoyCoffee(finalCoffee);
})
.catch((error)=>{
    console.log("Error occured", error);
});

