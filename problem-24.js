// problem-24.js
// find the millionth lexicographic permutation of 0123456789
var permutationRank = 1000000;
var digits = [0,1,2,3,4,5,6,7,8,9];
function permutation(n){
  if(n===1 || n == 0) return 1;
  else return n * permutation(n-1);
}


function findOutTheNumberIn(place, rank, digs){
  if(place == 1) return rank;
  var perm = permutation(place);
  if(perm > rank){
    return findOutTheNumberIn(place-1, rank, digs);
  }
  else{
    var max = digs[(maximize(perm,0,rank))];
    var expanded = max * Math.pow(10,place);
    console.log(place, max, perm, expanded, rank, digs);
    digs.splice(digs.indexOf(max), 1);
    return expanded + findOutTheNumberIn(place-1, rank-((max-(9-place))*perm), digs);
  }
}
function maximize(perms, agg, rank){
  if(perms + agg < rank){
    return (1 + maximize(perms, perms+agg, rank));

  }
  else return 0;
}
console.log(findOutTheNumberIn(10, permutationRank, digits));