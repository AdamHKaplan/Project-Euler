// problem-14.js
// which number under 1000000 produces the longest chain,
// according to n --> n/2 (n is even), n --> 3n+1 (n is odd)
var max = 0;
var maxCheck = 0;
var under = 1000000;
function chainLength(n){
  if(n===1){
    return 1;
  }
  else{
    return n%2 === 0 ? 1 + chainLength(n/2) : 1 + chainLength(3*n + 1);
  }
}
function solve(){
  for(var n = 2; n < 1000000; n++){
    var check = chainLength(n);
    if(check > maxCheck){
      max = n;
      maxCheck = check;
    }
  }
}
solve();
console.log(max);