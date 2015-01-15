// problem-2.js
// find sum of all even valued Fibonacci numbers whose values fall below 4,000,000.
function fib(a){
  if(a>2) return fib(a-1) + fib(a-2);
  else return a;
}
function sum(nth){
  var eval = fib(nth);
  if(eval%2 === 0 && eval <= 4000000){
    return eval + sum(nth+1); 
  }
  else if(eval > 4000000){
    return 0;
  }
  else return sum(nth+1);
}
console.log(sum(1));