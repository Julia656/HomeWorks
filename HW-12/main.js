function summarize(num) {
  return function(arg = 1) { 
    return num + arg;
  };
}

// Приклад використання
const addFive = summarize(5);

console.log(addFive(3)); 
console.log(addFive());  













function counter(startValue, step) {
  let currentValue = startValue;


  function count() {
    currentValue += step; 
    return currentValue;
  }

  count.increment = function() {
    currentValue += step;
    return currentValue;
  };


  count.decrement = function() {
    currentValue -= step;
    return currentValue;
  };

  count.reset = function() {
    currentValue = startValue;
    return currentValue;
  };

  return count;
}

// Приклад використання
const myCounter = counter(10, 2);

console.log(myCounter());        // 12 (стартове значення 10 + крок 2)
console.log(myCounter());        // 14
console.log(myCounter.increment()); // 16
console.log(myCounter.decrement()); // 14
console.log(myCounter.reset());     // 10 
console.log(myCounter());        // 12





















function sequence(...funcs) {
  return function(initialValue) {
    return funcs.reduce((acc, fn) => fn(acc), initialValue); 
  };
}

// Приклад використання
function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

function subtractOne(x) {
  return x - 1;
}


const mySequence = sequence(addTwo, multiplyByThree, subtractOne);

console.log(mySequence(5)); // (5 + 2) * 3 - 1 = 20

