function disabilityAmout(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  //장애 수당 계산 코드

  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}
