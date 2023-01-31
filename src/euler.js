export function Multiples() {
    let i = 0;
    let sum = 0;
    while (i < 1001) {
        let remainder3 = i % 3;
        let remainder5 = i % 5;
        if (remainder3 === 0 || remainder5 === 0) {
            sum = sum + i;
        }
        i++;
    }
    return sum;
}

export function Fibonacci() {
    let i = 1;
    let sum = 0;
    let fib = [1, 2];
    while (i < 1001) {
        fib.push(fib[i] + fib[i - 1]);
        i++;
    }
    fib.forEach(function (element) {
        if ((element % 2) === 0 && element < 4000000) {
            sum = sum + element;
        }
    });
    return sum;
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function Prime() {
  let number = 13195;
  let index1 = Math.round(number / 2);
  let primes = [];
  while (index1 > 0) {
    if ((number % index1) === 0) {
      if (isPrime(index1) === true) {
        primes.push(index1);
      }
    }
    index1--;
  }
  return primes[0];
}