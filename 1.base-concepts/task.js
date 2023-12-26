"use strict"
function solveEquation(a, b, c) {
  let discriminant = b**2 - 4*a*c;
  
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let x = -b / (2*a);
    return [x];
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    return [x1, x2];
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let creditAmount = amount - contribution;

  let monthlyPayment = creditAmount * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));

  let totalPayment = monthlyPayment * countMonths;
  totalPayment = Math.round(totalPayment * 100) / 100;

  return totalPayment;
}

console.log(calculateTotalMortgage(10, 20000, 100000, 120));
  