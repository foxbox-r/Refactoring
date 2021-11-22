const birds = [
  { type: "유럽 제비", numberOfCoconuts: 3, isNailed: 8, voltage: 10 },
  { type: "아프리카 제비", numberOfCoconuts: 7, isNailed: 1, voltage: 15 },
  {
    type: "노르웨이 파랑 앵무",
    numberOfCoconuts: 10,
    isNailed: 9,
    voltage: 120,
  },
];

function plumages(birds) {
  return birds.map((b) => createBird(b)).map((b) => [b.name, plumage(b)]);
}

function speeds(birds) {
  return birds
    .map((b) => createBird(b))
    .map((b) => [b.name, airSpeedVelocity(b)]);
}

function createBird(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricaSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class Bird {
  constructor(birdObject) {
    Object(this, birdObject);
  }
  get plumage() {
    return "알 수 없다";
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "보통이다";
  }
  get airSpeedVelocity() {
    return null;
  }
}

class AfricaSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다.";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
