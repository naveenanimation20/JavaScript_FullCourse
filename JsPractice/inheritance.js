class Automobile{
    constructor(chasisNumber){
        this.chasisNumber = chasisNumber;
    } 
    useAeroDynamic(){
        console.log("Automobile -- aerodynamic " + this.chasisNumber);
    }

}

//parent (super class)
class Vehicle extends Automobile{
    constructor(make, model, year){
        super(1000);
        this.make = make;
        this.model= model;
        this.year = year;
    }

    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }
    startEngine(){
        console.log('Starting engine...' + this.make);
    }
    stopEngine() {
        console.log("Stopping Engine...");
    }
}

//child(Sub class):
class Car extends Vehicle{
    constructor(make, model, year, fuelType){
        super(make, model, year);//call the parent class constructor
        this.fuelType = fuelType;
    }

    driverCar(){
        console.log('driving the car ' + this.model + " " + this.fuelType);
    }
}

//child(Sub class):
class Truck extends Vehicle{
    constructor(make, model, year, loadingCapacity){
        super(make, model, year);//call the parent class constructor
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log('driving the truck ' + this.model + " capacity " + this.loadingCapacity);
    }
}

//creating the objects (instances): new keyword:
const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 100);

car.startEngine();
console.log(car.getInfo());
car.driverCar();
car.useAeroDynamic();
console.log(car.chasisNumber);

truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();
