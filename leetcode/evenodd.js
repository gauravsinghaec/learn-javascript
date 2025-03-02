const evenOrOdd = (num) => {
  if (num && 1) {
    console.log("odd");
  } else {
    console.log("even");
  }
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isDivisibleByThree = (num) => {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

const isEvenAndDivisibleBy = function (num) {
  if (isEven(num) && isDivisibleByThree(num)) {
    return true;
  } else {
    return false;
  }
};

const isEvenAndDivisibleBy2 = (num) => {
  if (isEven(num) && isDivisibleByThree(num)) {
    return true;
  } else {
    return false;
  }
};

const isEvenAndDivisibleBy3 = (num) => {
  return isEven(num) && isDivisibleByThree(num) ? true : false;
};

const isEvenAndDivisibleBy4 = (num) => {
  return isEven(num) && isDivisibleByThree(num);
};

const isEvenAndDivisibleBy5 = (num) => isEven(num) && isDivisibleByThree(num);


const isEvenAndDivisibleBy6 = (num) => num % 2 === 0 && num % 3 === 0;

