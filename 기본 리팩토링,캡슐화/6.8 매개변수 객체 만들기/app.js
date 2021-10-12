const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 43, time: "2016-11-10 09:20" },
    { temp: 42, time: "2016-11-10 09:30" },
    { temp: 45, time: "2016-11-10 09:40" },
    { temp: 41, time: "2016-11-10 09:50" },
    { temp: 23, time: "2016-11-10 09:60" },
  ],
};

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

console.log(readingsOutsideRange(station, 43, 46));
