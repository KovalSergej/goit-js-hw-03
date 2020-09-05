"use strict";

const findBestEmployee = (employees) => {
  let leaderQuntity = 0;
  let leaderName;
  for (const employee in employees) {
    if (employees[employee] > leaderQuntity) {
      leaderQuntity = employees[employee];
      leaderName = employee;
    }
  }
  return leaderName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
