const rawReading = { customer: "ivan", quntity: 10, month: 5, year: 2020 };
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result); // <= 미가공 측정값에 기본 소비량을 부가 정보로 덧붙임
  result.taxableCharge = calculateTaxableCharge(result.baseCharge, result); // <= 미가공 측정값에 세금을 부가 정보로 덧붙임
  return result;
}
