function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function filterPrimes(numbers) {
    return numbers.filter(isPrime); 
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = filterPrimes(numbers);
console.log(primeNumbers); 










function isPalindrome(str) {

    str = str.toLowerCase().replace(/\s+/g, '');
    

    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    
    return true;
  }








// Приклад використання
const notifications = [
    { source: "email", text: "Hello from email!", date: "2024-10-01" },
    { source: "sms", text: "You have a new SMS.", date: "2024-10-02" },
    { source: "email", text: "Another email message.", date: "2024-10-03" },
    { source: "push", text: "New push notification!", date: "2024-10-04" },
];

const groupedMessages = groupMessagesBySource(notifications);
console.log(groupedMessages);
{
    email: [
        { text: "Hello from email!", date: "2024-10-01" },
        { text: "Another email message.", date: "2024-10-03" }
    ]
    sms: [
        { text: "You have a new SMS.", date: "2024-10-02" }
    ]
    push: [
        { text: "New push notification!", date: "2024-10-04" }
    ]
}








function groupBy(array, keyGetter) {
    return array.reduce((acc, item) => {
        const key = keyGetter(item); // Отримуємо ключ з поточного елемента
        if (!acc[key]) {
            acc[key] = []; // Якщо ключа ще немає, ініціалізуємо новий масив
        }
        acc[key].push(item); // Додаємо елемент до масиву відповідного ключа
        return acc;
    }, {});
}

// Приклад використання
const items = [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 2, category: 'fruit', name: 'banana' },
    { id: 3, category: 'vegetable', name: 'carrot' },
    { id: 4, category: 'fruit', name: 'orange' },
    { id: 5, category: 'vegetable', name: 'lettuce' }
];

const groupedItems = groupBy(items, item => item.category);
console.log(groupedItems);


{
    fruit: [
        { id: 1, category: 'fruit', name: 'apple' },
        { id: 2, category: 'fruit', name: 'banana' },
        { id: 4, category: 'fruit', name: 'orange' }
    ]
    vegetable: [
        { id: 3, category: 'vegetable', name: 'carrot' },
        { id: 5, category: 'vegetable', name: 'lettuce' }
    ]
}