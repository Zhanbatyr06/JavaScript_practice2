function getSum(a, b){
return a+b;
}

console.log(getSum(5,3));
console.log(getSum(-11, 3));
console.log(getSum(0.2, 0.7));

function isSquare(n){
  if(n < 0){
    return false;
  }
  sqrt_n = Math.sqrt(n);
  return sqrt_n * sqrt_n;
}

console.log(isSquare(9))
console.log(isSquare(8));

function greeting(first_name, last_name, age){
  return "Hello, my name is " + first_name + last_name + " and I'm " + age + " years old."
}

console.log(greeting('Bill', 'Jacobson', 33));
console.log(greeting('Jim', 'Power', 11));