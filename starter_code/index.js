const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let julia = new Person("julia", 3, 7);
let luisa = new Person("Luisa", 1, 9);
elevator.start()
elevator.call(julia)
setTimeout(()=> elevator.call(luisa), 6000)
