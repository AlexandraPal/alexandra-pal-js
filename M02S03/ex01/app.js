class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  deccelerate() {
    this.speed--;
    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .deccelerate()
  .deccelerate()
  .deccelerate();

const paragraphElement = document.createElement('p');
paragraphElement.innerText = `Viteza masinii ${audi.make} este ${audi.speed}.`;

document.body.append(paragraphElement);
