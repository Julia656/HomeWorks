function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false; 
  
   
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function filterPrimes(numbers) {
    return numbers.filter(isPrime); 
  }
  
  // Приклад використання:
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // Виведе: [2, 3, 5, 7, 11]













  function groupNotifications(notifications) {
    return notifications.reduce((accumulator, notification) => {
    
        const source = notification.source;

     
        if (!accumulator[source]) {
            accumulator[source] = [];
        }

        const { text, date } = notification; 
        accumulator[source].push({ text, date });

        return accumulator; 
    }, {}); 
}

// Приклад використання
const notifications = [
    { source: 'System', text: 'Update available', date: '2024-10-28' },
    { source: 'User', text: 'Message received', date: '2024-10-28' },
    { source: 'System', text: 'Maintenance scheduled', date: '2024-10-29' },
    { source: 'User', text: 'Friend request', date: '2024-10-28' }
];

const groupedNotifications = groupNotifications(notifications);
console.log(groupedNotifications);































function group(array, key) {
    return array.reduce((accumulator, item) => {
     
        const groupKey = item[key];

        
        if (!accumulator[groupKey]) {
            accumulator[groupKey] = [];
        }

       
        accumulator[groupKey].push(item);
        
        return accumulator; 
    }, {}); 
}

// Приклад використання
const data = [
    { category: 'fruits', name: 'apple' },
    { category: 'fruits', name: 'banana' },
    { category: 'vegetables', name: 'carrot' },
    { category: 'fruits', name: 'orange' },
    { category: 'vegetables', name: 'broccoli' }
];

const groupedData = group(data, 'category');
console.log(groupedData);










