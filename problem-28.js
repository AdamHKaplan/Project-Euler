// problem-28.js
// sum of diagonals in a 1001 x 1001 spiral.
// 
// The highest number formed is 1001^2
// also is in the diagonals.
// The next 4 highest numbers can be found by subtracting
// 1000 from 1001 ^2 four consecutive times.
// The next 4 can be found by subtracting 998...
// The next 4 can be found by subtracting 996...
// ...
// The 4 lowest numbers can be found by subtracting 2 four consecutive times
// 
// also note that even dimensions do not produce with a center

var highest = Math.pow(1001,2);

function solve(addend, subtractor, modulus){
  if(addend <= 1) return addend;
  else{
    var nextSub = modulus % 4 === 0 ? subtractor - 2 : subtractor;
    return addend + solve(addend-nextSub, nextSub, modulus + 1);
  }
}
console.log(solve(highest, 1002, 0))