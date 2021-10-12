const aReading = { customer: "ivan", quntity: 10, month: 5, year: 2020 };

const baseCharge = calculateBaseCharge(aReading);
const taxableCharge = calculateTaxableCharge(baseCharge, aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quntity;
}

function calculateTaxableCharge(base, aReading) {
  return Math.max(0, base - taxThreshold(aReading.year));
}

function taxThreshold() {
  /* ... */
}
function baseRate() {
  /* ... */
}
