function isPrime(number) {
    if (number <= 1) {
        console.log(`Число ${number} не є простим числом.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`Число ${number} не є простим числом.`);
            return;
        }
    }

    console.log(`Число ${number} є простим числом.`);
}







function isPerfectNumber(number) {
    let sum = 0;
    
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    
    return sum === number && number !== 0;
}

function findPerfectNumbers(N) {
    let perfectNumbers = [];
    
    for (let i = 1; i <= N; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    
    console.log(`Досконалі числа в діапазоні від 1 до ${N}: ${perfectNumbers.join(', ')}`);
}








function drawChristmasTree(height) {
    let tree = '';
    for (let i = 1; i <= height; i++) {
        tree += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + (i === height ? '' : '\n');
    }
    console.log(tree);
}