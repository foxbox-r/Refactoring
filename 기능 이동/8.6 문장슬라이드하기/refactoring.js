const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;

const order = retreiveOrder();
const units = order.units;

let charge;
charge = baseCharge + units * chargePerUnit;

let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

let discount;
discount = discountableUnits * pricingPlan.discountFactor;

if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
