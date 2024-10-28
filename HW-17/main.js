function randomDelayPrint(message) {
 
    for (let i = 0; i < message.length; i++) {
      
      let delay = Math.random() * 1000;
      
      setTimeout(() => {
        console.log(message[i]); 
      }, delay);
    }
  }
  
  // Викликаємо функцію
  randomDelayPrint("Hello");















  function debounce(callback, delay) {
    let timeoutId; 
  
    return function(...args) {
      clearTimeout(timeoutId); 
      timeoutId = setTimeout(() => {
        callback.apply(this, args); 
      }, delay);
    };
  }
  
  // Приклад використання:
  const logMessage = debounce((message) => console.log(message), 1000);
  
  logMessage("Hello"); 
  logMessage("Hello again"); 















  function intervalRace(functions, interval) {
    return new Promise((resolve) => {
      const results = [];
      let currentIndex = 0;
  
      const intervalId = setInterval(async () => {
       
        if (currentIndex >= functions.length) {
          clearInterval(intervalId);
          resolve(results);
        } else {

          const result = await functions[currentIndex]();
          results.push(result);
          currentIndex++;
        }
      }, interval);
    });
  }
  
  // Приклад використання:
  const func1 = () => new Promise(res => setTimeout(() => res("Result 1"), 500));
  const func2 = () => new Promise(res => setTimeout(() => res("Result 2"), 500));
  const func3 = () => new Promise(res => setTimeout(() => res("Result 3"), 500));
  
  intervalRace([func1, func2, func3], 1000).then((results) => {
    console.log(results); 
  });