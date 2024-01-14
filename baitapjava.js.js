function fibonacci(n) {
    var fib = [0, 1]; // Mảng chứa các số Fibonacci
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Tính số Fibonacci tiếp theo
    }
    return fib;
}
var n = 20;
var fibNumbers = fibonacci(n);
// In ra các số Fibonacci
for (var i = 0; i < n; i++) {
    console.log(fibNumbers[i]);
}


function isPrime(n){
    if(n==1 || n==2) return true
    for(let i=2; i<n; i++){
        if(n % i == 0) return false
    }
    return true
}
var n = 3;
var test = isPrime(n);
console.log(test);


function factorial(n){
    if(n == 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(4));


function reverse_a_number(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(321));


function printPrimes(n) {
    var primes = [];
    var number = 2;
  
    while (primes.length < n) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
  
    return primes;
  }
  
  var n = 20; // Số nguyên tố cần in ra
  var primeNumbers = printPrimes(n);
  
  // In ra các số nguyên tố
  for (var i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
  }


// BÀI TẬP JAVA CƠ BẢN // 
// Bài 1
var x = 0.5;
var eps = 0.001;
var first = 1;
var mu = 1;
var second = first + Math.pow(x,mu) / factorial(mu);

while(Math.abs(first - second) > eps){
    mu++
    first = second
    second = first + Math.pow(x,mu) / factorial(mu)
}
document.write(first + "<br>")


// Bài 2
var x = 0.5;
var eps = 0.001;
var first = 1;
var mu = 1;
var second = first + Math.pow(-x,mu) * ((mu+1)*(mu+2)/2);

while(Math.abs(first - second) > eps){
    mu++
    first = second
    second = first + Math.pow(-x,mu) * ((mu+1)*(mu+2)/2)
}
document.write(first + "<br>")


// Bài 3: 
var x = 0.5;
var eps = 0.001;
var first = -x;
var mu = 2;
var second = first - Math.pow(x, mu) / mu;

while (Math.abs(first - second) > eps) {
  mu++;
  first = second;
  second = first - Math.pow(x, mu) / mu;
}

document.write(first + "<br>");


// Bài 4: 
var x = 0.5;
var eps = 0.001;
var first = 1;
var sum = first;
var n = 1;

while (true) {
  var term = 0;

  if (n === 1) {
    term = (1 / 2) * x;
  } else {
    var numerator = 1;
    var denominator = 1;
    for (var i = 1; i <= n; i++) {
      numerator *= (2 * i - 1);
      denominator *= (2 * i * (2 * i + 1));
    }
    term = (numerator / denominator) * Math.pow(x, n) * Math.pow(-1, n-1) * Math.pow(2, n-1);
  }

  if (Math.abs(term) < eps)
    break;

  sum += term;
  n++;
}

document.write(sum + "<br>");


// Bài 5
var x = 0.5;
var eps = 0.001;
var first = 1;
var sum = first;
var n = 1;

while (true) {
  var term = 0;

  if (n === 1) {
    term = -(1/2) * x;
  } else {
    var numerator = 1;
    var denominator = 1;
    for (var i = 1; i <= n; i++) {
      numerator *= (2 * i - 1);
      denominator *= (2 * i);
    }
    term = (numerator / denominator) * Math.pow(x, n) * Math.pow(-1, n-1);
  }

  if (Math.abs(term) < eps)
    break;

  sum += term;
  n++;
}
var result = 1 / Math.sqrt(1 + x);
document.write(result + "<br>");


// Bài 6
var x = 0.5;
var eps = 0.001;
var term = x;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * x * x / ((2 * n) * (2 * n + 1));
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");



// Bài 7 
var x = 0.5;
var eps = 0.001;
var term = 1;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * x * x / ((2 * n) * (2 * n - 1));
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 8 
var a = 0.5;
var eps = 0.001;
var term = a;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (1 / ((2 * n) * (2 * n + 1))) * Math.pow(a, 2 * n + 1);
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 9
var x = 0.5;
var eps = 0.001;
var term = 1;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * Math.pow(x, 2) / ((2 * n) * (2 * n + 1));
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 10 
var x = 0.5;
var eps = 0.001;
var term = x;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * Math.pow(x, 2) / ((2 * n) * (2 * n + 1));
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 11
var x = 0.5;
var eps = 0.001;
var term = x;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * x;
  term *= (n + 1) / (n + 2);
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 12
var x = 0.5;
var eps = 0.001;
var term = x;
var sum = term;
var n = 1;

while (Math.abs(term) > eps) {
  term *= (-1) * (x * x);
  term *= (2 * n - 1) / (2 * n + 1);
  sum += term;
  n++;
}

var result = 2 * sum;
document.write(result + "<br>");


// Bài 13
var x = 0.5;
var eps = 0.000001;
var term = x;
var sum = term;
var n = 1;
var factorial = 1;

while (Math.abs(term) > eps) {
  term *= x * x;
  factorial *= (2 * n) * (2 * n + 1);
  term /= factorial;
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");


// Bài 14
var x = 0.5;
var eps = 0.000001;
var term = 1;
var sum = term;
var n = 1;
var factorial = 1;

while (Math.abs(term) > eps) {
  term *= x * x;
  factorial *= (2 * n) * (2 * n - 1);
  term /= factorial;
  sum += term;
  n++;
}

var result = sum;
document.write(result + "<br>");