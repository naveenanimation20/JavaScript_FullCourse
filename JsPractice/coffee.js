// Start the coffee machine. - 2 secs
// Grind coffee beans. - 1 sec
// Boil water. - 1.5 sec
// Pour boiling water into a cup. - 0.5 sec
// Add ground coffee to the cup. - 0.5 sec
// Stir the coffee. - 0.3 sec
// Enjoy your coffee!

function startCoffeeMachine(callback) {
    console.log('Starting the coffee machine...');
    setTimeout(function () {
      console.log('Coffee machine is ready.');
      callback('coffee machine is ready');
    }, 2000);
  }
  
  function grindCoffeeBeans(callback) {
    console.log('Grinding coffee beans...');
    setTimeout(function () {
      console.log('Coffee beans are ground.');
      callback('ground coffee');
    }, 1000);
  }
  
  function boilWater(callback) {
    console.log('Boiling water...');
    setTimeout(function () {
      console.log('Water is boiled.');
      callback('boiled water');
    }, 1500);
  }
  
  function pourBoilingWaterIntoCup(boiledWater, callback) {
    console.log('Pouring boiling water into a cup...');
    setTimeout(function () {
      console.log('Boiling water is in the cup.');
      callback(boiledWater + ' in cup');
    }, 500);
  }
  
  function addCoffeeToCup(groundCoffee, callback) {
    console.log('Adding ground coffee to the cup...');
    setTimeout(function () {
      console.log('Coffee is added to the cup.');
      callback('coffee is added to ' + groundCoffee);
    }, 500);
  }
  
  function stirCoffee(coffeeInCup, callback) {
    console.log('Stirring the coffee...');
    setTimeout(function () {
      console.log('Coffee is stirred.');
      callback('enjoyable ' + coffeeInCup);
    }, 300);
  }
  
  function enjoyCoffee(finalCoffee) {
    console.log('Enjoying my ' + finalCoffee);
  }
  
// Start the coffee machine.
// Grind coffee beans.
// Boil water.
// Pour boiling water into a cup.
// Add ground coffee to the cup.
// Stir the coffee.
// Enjoy your coffee!


//callback hell:
startCoffeeMachine(function (coffeeMachineStatus){
    grindCoffeeBeans(function (groundCoffee){
        boilWater(function (boiledWater){
            pourBoilingWaterIntoCup(boiledWater, function (waterInCup){
                addCoffeeToCup(groundCoffee, function (coffeeInCup){
                    stirCoffee(coffeeInCup, function (finalCoffee){
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })
    })
}) 

//callback hell with arrow =>:
startCoffeeMachine( (coffeeMachineStatus)=>{
    grindCoffeeBeans( (groundCoffee) => {
        boilWater( (boiledWater) => {
            pourBoilingWaterIntoCup(boiledWater,   (waterInCup)=> {
                addCoffeeToCup(groundCoffee,  (coffeeInCup)=>{
                    stirCoffee(coffeeInCup,  (finalCoffee)=>{
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })
    })
}) 
  