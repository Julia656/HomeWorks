function groupMessagesBySource(messages) {
    const grouped = messages.reduce((acc, message) => {
        const { source, text, date } = message;
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push({ text, date });
        return acc;
    }, {});

    grouped[Symbol.iterator] = function* () {
        for (const source in this) {
            if (Array.isArray(this[source])) {
                for (const message of this[source]) {
                    yield message; 
                }
            }
        }
    };

    return grouped;
}

// Приклад використання
const notifications = [
    { source: "email", text: "Hello from email!", date: "2024-10-01" },
    { source: "sms", text: "You have a new SMS.", date: "2024-10-02" },
    { source: "email", text: "Another email message.", date: "2024-10-03" },
    { source: "push", text: "New push notification!", date: "2024-10-04" },
];

const groupedMessages = groupMessagesBySource(notifications);


for (const message of groupedMessages) {
    console.log(message);
}


{ text: 'Hello from email!', date: '2024-10-01' }
{ text: 'Another email message.', date: '2024-10-03' }
{ text: 'You have a new SMS.', date: '2024-10-02' }
{ text: 'New push notification!', date: '2024-10-04' }










function memoize(fn) {
    const cache = new Map(); 

    return function(...args) {
        const key = JSON.stringify(args); 

       
        if (cache.has(key)) {
            return cache.get(key);
        }

        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Приклад використання
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 











function memoize(fn, limit) {
    const cache = new Map(); 

    return function(...args) {
        const key = JSON.stringify(args); 

      
        if (cache.has(key)) {
            return cache.get(key);
        }

       
        const result = fn(...args);
        cache.set(key, result);

        if (cache.size > limit) {
            const firstKey = cache.keys().next().value; 
            cache.delete(firstKey); 
        }

        return result;
    };
}

// Приклад використання
const add = (a, b) => a + b;
const memoizedAdd = memoize(add, 3); 

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(4, 5)); 
console.log(memoizedAdd(5, 6)); 


console.log(memoizedAdd(1, 2)); 












function memoize(fn, limit) {
    const cache = new Map(); 
    const resultKeys = new Set(); 

    return function(...args) {
        const key = JSON.stringify(args); 

        
        if (cache.has(key)) {
            return cache.get(key);
        }

    
        const result = fn(...args);
        
        
        if (!resultKeys.has(result)) {
            cache.set(key, result); 

            
            resultKeys.add(result);

         
            if (cache.size > limit) {
                const firstKey = cache.keys().next().value; 
                const firstResult = cache.get(firstKey);

                cache.delete(firstKey); 
                resultKeys.delete(firstResult); 
            }
        }

        return result;
    };
}

// Приклад використання
const add = (a, b) => a + b;
const memoizedAdd = memoize(add, 3); 

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(4, 5)); 
console.log(memoizedAdd(5, 6)); 


console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 