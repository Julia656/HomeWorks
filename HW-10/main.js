function groupNotificationsBySource(notifications) {
    const groupedNotifications = {};
  
    notifications.forEach(notification => {
      const { source, text, date } = notification;
  
      if (!groupedNotifications[source]) {
        groupedNotifications[source] = []; 
      }
  
      groupedNotifications[source].push({ text, date }); 
    });
  

    groupedNotifications[Symbol.iterator] = function() {
      const allNotifications = [];
  
      
      for (const source in this) {
        if (Array.isArray(this[source])) {
          allNotifications.push(...this[source]);
        }
      }
  
      let index = 0;
      return {
        next() {
          if (index < allNotifications.length) {
            return { value: allNotifications[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    };
  
    return groupedNotifications;
  }
  
  // Приклад використання
  const notifications = [
    { source: 'Email', text: 'You have a new message', date: '2024-10-18' },
    { source: 'SMS', text: 'Verification code: 1234', date: '2024-10-19' },
    { source: 'Email', text: 'Your order has been shipped', date: '2024-10-20' },
    { source: 'App', text: 'New update available', date: '2024-10-21' },
  ];
  
  const grouped = groupNotificationsBySource(notifications);
  for (const notification of grouped) {
    console.log(notification);
  }









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