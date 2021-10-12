function distanceTravelled(scenario, time) {
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);

  let result;
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;

  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    let primaryVelocity = primaryAcceleration * scenario.delay;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

// 매개변수의 값을 수정할 때

function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return inputValue;
}
