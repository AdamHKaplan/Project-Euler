// problem-24.js
// find the millionth lexicographic permutation of 0123456789
// the total # of lexicographic permutations that can be produced by a set of n numbers is n! (factorial).
// if n! exceeds the desired rank, evaluate (n-1)!
// else, evaluate how many times (n-1)! can be added to itself before exceeding desired rank.
// Let this number equal x.
// The xth highest digit of the digits available to insert into the (desired rank) highest lexicographic permutation
// is the next digit in the lexi perm.
var permutationRank = 1000000;
var digits = [0,1,2,3,4,5,6,7,8,9];
function permutation(n){
  if(n===1 || n == 0) return 1;
  else return n * permutation(n-1);
}
function findOutTheNumberIn(exponent, rank, digs){
  if(exponent == 0) return digs[0];
  var perm = permutation(exponent);
  if(perm > rank){
    return findOutTheNumberIn(exponent-1, rank, digs);
  }
  else{
    var nthHighestAvailableDigit = maximize(perm, 0, rank);
    var maxDigit = digs[nthHighestAvailableDigit];
    var expanded = maxDigit * Math.pow(10,exponent);
    digs.splice(digs.indexOf(max), 1);
    return expanded + findOutTheNumberIn(exponent-1, rank-((nthHighestAvailableDigit)*perm), digs);
  }
}
function maximize(perms, agg, rank){
  if(perms + agg < rank){
    return (1 + maximize(perms, perms+agg, rank));
  }
  else return 0;
}
console.log(findOutTheNumberIn(10, permutationRank, digits));