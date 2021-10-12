const aReading1 = { customer: "ivan", quntity: 10, month: 5, year: 2020 };
const aReading2 = { customer: "rrr", quntity: 12, month: 3, year: 2018 };
const aReading3 = { customer: "sua", quntity: 8, month: 2, year: 2017 };

const baseCharge1 = new Reading(aReading1).baseCharge;
const baseCharge2 = new Reading(aReading2).baseCharge;
const baseCharge3 = new Reading(aReading3).baseCharge;

const taxsable1 = new Reading(aReading1).taxableCharge;
const taxsable2 = new Reading(aReading2).taxableCharge;
const taxsable3 = new Reading(aReading3).taxableCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quntity;
}

function baseRate(month, year) {
  return year + month * 30;
}

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quntity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quntity() {
    return this._quntity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(aReading.month, aReading.year) * aReading.quntity;
  }

  get taxableCharge() {
    return this.baseCharge * 0.1;
  }
}
