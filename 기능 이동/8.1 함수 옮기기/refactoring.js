function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);

  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateTime() {
    /*****/
  } // 총 시간 계산
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  return result;

  function distance(p1, p2) {
    // radians()를 사용하는 로직
  } // 두 지점의 거리 계산
  function radians(degrees) {
    /*****/
  } /// 라디안 값으로 변환
}

function trackSummary() {
  /***/
}
function totalDistance() {
  /***/
}
function distance() {
  /***/
}
function radians() {
  /***/
}
