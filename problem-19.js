// problem-19.js
// how many Sundays between 1/1/1900 and 12/31/2000 fell on first of the month?

// (Feel free to feed me the optimal formula)
var firstSundays = 0;
var daysToCount = 0;
var dows = ['su','m','tu','w','th','f','sa'];
function daysInMonths(year){
  return [31, feb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function feb(year){
  if(year%4 === 0 && nonCenturyIndivisibleByFourHun(year)){
    return 29;
  }
  else return 28;
}
function nonCenturyIndivisibleByFourHun(year){
  return !(year % 100 === 0 && year % 400 !== 0);
}
var d = 0;
var m = 1;
var y = 1900;
function addToSundays(){
  var progress = daysInMonths(y)[m-1];
  daysToCount += progress;
  daysToCount %= 7;
  if((m===12 && y === 2000)){
    // we are done
  }
  else{
    checkIfSunday();
    m == 12 ? m = 1 : m += 1; 
    if(m === 1) y += 1;
    addToSundays();
  }
}
function checkIfSunday(){
  if(daysToCount === 6 && y > 1900){
    console.log(y,m);
    firstSundays += 1;
  }
}
addToSundays();
console.log(firstSundays);