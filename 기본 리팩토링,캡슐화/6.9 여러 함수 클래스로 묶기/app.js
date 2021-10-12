const aReading1 = { customer: "ivan", quntity: 10, month: 5, year: 2020 };
const aReading2 = { customer: "rrr", quntity: 12, month: 3, year: 2018 };
const aReading3 = { customer: "sua", quntity: 8, month: 2, year: 2017 };

const baseCharge1 =
  baseRate(aReading1.month, aReading1.year) * aReading1.quntity;
const baseCharge2 =
  baseRate(aReading2.month, aReading2.year) * aReading2.quntity;
const baseCharge3 =
  baseRate(aReading3.month, aReading3.year) * aReading3.quntity;

function baseRate(month, year) {
  return year + month * 30;
}
