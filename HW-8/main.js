function capitalizeStrings(words) {
    return words.map(word => {
        // Перетворюємо першу літеру на великий регістр і решту на малий
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]







function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]







function analyzeArray(numbers) {
    if (numbers.length === 0) {
        return { sum: 0, average: 0, min: null, max: null }; // Обробка порожнього масиву
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}

const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }