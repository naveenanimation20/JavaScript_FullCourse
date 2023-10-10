class Car{
    minSpeed = 100;
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log('Starting engine... for Car');
    }
}

class Audi extends Car{
    minSpeed = 200;
    //overridden method
    startEngine(){
        console.log('Starting engine... for Audi');
    }

    autoParking(){
        console.log("Audi -- auto parking");
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();
//car.autoParking();

