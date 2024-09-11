function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}




function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} год является високосным.`);
    } else {
        console.log(`${year} год не является високосным.`);
    }
}   




function getYearMessage(age) {
    let message = `Вам ${age} `;
    if (age % 10 === 1 && age % 100 !== 11) {
        message += 'рік';
    } else if ((age % 10 >= 2 && age % 10 <= 4) && !(age % 100 >= 12 && age % 100 <= 14)) {
        message += 'роки';
    } else {
        message += 'років';
    }
    console.log(message);
}