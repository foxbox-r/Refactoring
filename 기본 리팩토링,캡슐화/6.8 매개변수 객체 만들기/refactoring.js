const station = {
  name: "ZB1",
  readings: [
    { temperature: 47, time: "2016-11-10 09:10" },
    { temperature: 43, time: "2016-11-10 09:20" },
    { temperature: 42, time: "2016-11-10 09:30" },
    { temperature: 45, time: "2016-11-10 09:40" },
    { temperature: 41, time: "2016-11-10 09:50" },
    { temperature: 23, time: "2016-11-10 09:60" },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  isCanContain(temperature) {
    return temperature < this.min || temperature > this.max;
  }

  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
}
const operatinPlan = { min: 43, max: 46 };
const range = new NumberRange(operatinPlan.min, operatinPlan.max);

function readingsOutsideRange(station, range) {
  return station.readings.filter((reading) =>
    range.isCanContain(reading.temperature)
  );
}

console.log(readingsOutsideRange(station, range));
