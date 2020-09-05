"use strict";

const countTotalSalary = function (employees) {
  let totalSallary = 0;
  for (let employee in employees) {
    totalSallary += employees[employee];
  }
  return totalSallary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
