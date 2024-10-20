function fibonacci(n) {
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Приклад використання:
const n = 6; // Задаємо значення n
console.log(`Число Фібоначчі для n = ${n} є: ${fibonacci(n)}`);














function isPalindrome(num) {
   
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function reverseNumber(num) {
 
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findPalindrome(num) {
    let steps = 0;
    
    while (!isPalindrome(num)) {
        const reversed = reverseNumber(num);
        num += reversed; 
        steps++;
    }
    
    return {
        result: num,
        steps: steps
    };
}

// Приклад використання з числом 196
const inputNumber = 196;
const result = findPalindrome(inputNumber);
console.log(result);



















function generatePermutations(arr) {
    const result = []; 

    
    function permute(current, remaining) {
     
        if (remaining.length === 0) {
            result.push(current);
        } else {
         
            for (let i = 0; i < remaining.length; i++) {
             
                const newCurrent = [...current, remaining[i]];
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                
           
                permute(newCurrent, newRemaining);
            }
        }
    }

    permute([], arr);

    return result;
}

// Приклад використання
const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray);
console.log(permutations);