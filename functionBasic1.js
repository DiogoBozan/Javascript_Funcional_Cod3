function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));
//  *************************--------------- *************************************------------------------------

function sumThreeFunction(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const sumAB = sumThreeFunction(3)(4);
console.log(sumAB(10));
//  ************************* --------------- *************************************------------------------------

function higherOrderFunction(a) {
  return function fn(b) {
    return a + b;
  };
}
console.log(higherOrderFunction(3)(2));
//  ************************* --------------- *************************************------------------------------

function calc(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const result1 = calc(50)(25)(subtrair);
console.log(result1);

const result2 = calc(10)(10)(multiplicar);
console.log(result2);
//  ************************* --------------- *************************************------------------------------

const sum = (numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum([1, 5, 10, 25, 30]));
//  ************************* --------------- *************************************------------------------------

const sum = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(10, 25, 10, 25, 30));
console.log(sum(25, 25));
console.log(sum(10, 35));

const potencia = (base) => {
  return (exp) => {
    return Math.pow(base, exp);
  };
};

console.log(potencia(10)(2));
