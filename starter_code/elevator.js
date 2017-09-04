class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
  }

  start() {
    this.interval = setInterval(() =>this.update(), 1000);
  }
  stop() {
    clearInterval(this.interval);
  }
  update() {
    if (this.requests.length == 0) {
      this.stop();
    } else if (this.floor < this.requests[0]){
      this.direction = "up";
      this._passengersLeave();
      this._passengersEnter();
      this.floorUp();
    }else if(this.floor > this.requests[0]){
      this.direction = "down";
      this._passengersLeave();
      this._passengersEnter();
      this.floorDown();
    }else{
      this._passengersLeave();
      this._passengersEnter();
    }
      this.log();
  }
  _passengersEnter() {
    this.waitingList.forEach(p => {
      if (p.A == this.floor) {
        console.log(p.UN + " Has enter the elevator");
        this.passengers.push(p);
        this.requests.push(p.R);
        this.requests.shift();
        this.waitingList.shift();
      }
    });
  }
  _passengersLeave() {
    this.passengers.forEach(p => {
      if (p.R == this.floor) {
        console.log(p.UN + " Has leave the elevator");
        this.passengers.shift();
        this.requests.shift();
      }
    })
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
    } else {
      console.log("you are on the top floor");
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
    } else {
      console.log("you are in the minimum floor");
    }
  }
  call(person) {
    this.requests.push(person.A);
    this.waitingList.push(person);

  }
  log() {
    console.log("Direction:" + this.direction + "Floor:" + this.floor);
  }
}

module.exports = Elevator;
