function calculateSimpleInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
  let interest;
  P = principal;
  R = dailyInterest * 365;
  T =
    (new Date(endingDate) - new Date(startingDate)) / (1000 * 3600 * 24 * 365);
  interest = (P * R * T) / 100;
  if (isNaN(interest)) {
    return -1;
  }
  return Math.floor(interest);
}

function calculateCompoundInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
  let interest;
  P = principal;
  I = dailyInterest;
  N = (new Date(endingDate) - new Date(startingDate)) / (1000 * 3600 * 24);
  interest = P * Math.pow(1 + I / 100, N) - P;
  if (isNaN(interest)) {
    return -1;
  }
  return Math.floor(interest);
}

function extraAmountPercentage(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
  // Check if starting date and ending date are undefined
  if (startingDate === undefined || endingDate === undefined) {
    return -1;
  }
  let percentage;
  diff =
    calculateCompoundInterest(
      principal,
      dailyInterest,
      startingDate,
      endingDate
    ) -
    calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
  percentage =
    (diff /
      calculateSimpleInterest(
        principal,
        dailyInterest,
        startingDate,
        endingDate
      )) *
    100;
  if (isNaN(percentage) || percentage < 0) {
    return -1;
  }
  return Math.floor(percentage);
}
