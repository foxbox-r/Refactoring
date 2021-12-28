if (aPlan.withinRange(aRoom.daysTempRange)) {
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan {
  withinRange(tempRange) {
    return (
      tempRange.bottom >= this._temperatureRange.low &&
      tempRange.top <= this._temperatureRange.high
    );
  }
}
