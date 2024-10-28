function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0); 
        resolve(sum); 
      }, 3000); 
    });
  }
  
  // Приклад використання:
  sumArrayPromise([1, 2, 3, 4, 5]).then(console.log); // Виведе 15 через 3 секунди


















  async function concurrentPromises(promises, maxConcurrent) {
    const results = [];
    let currentIndex = 0;
  
    const executePromise = async () => {
      if (currentIndex >= promises.length) return;
      
      const currentPromiseIndex = currentIndex;
      currentIndex++;
      
     
      results[currentPromiseIndex] = await promises[currentPromiseIndex]();
      await executePromise(); 
    };
  
    const initialPromises = Array.from({ length: Math.min(maxConcurrent, promises.length) }, executePromise);
    
   
    await Promise.all(initialPromises);
    return results;
  }
  
  // Приклад використання:
  const delay = (ms, value) => () => new Promise(resolve => setTimeout(() => resolve(value), ms));
  
  const promises = [
    delay(1000, 'A'),
    delay(500, 'B'),
    delay(300, 'C'),
    delay(700, 'D'),
    delay(200, 'E')
  ];
  
  concurrentPromises(promises, 2).then(console.log);
  // Очікуваний вивід: ['A', 'B', 'C', 'D', 'E'], після завершення усіх промісів




















  async function sequenceAsync(asyncFunctions, initialValue) {
    return asyncFunctions.reduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(initialValue)
    );
  }
  
  // Приклад використання:
  const asyncFunc1 = (result) => new Promise((resolve) => setTimeout(() => resolve(result + 1), 1000));
  const asyncFunc2 = (result) => new Promise((resolve) => setTimeout(() => resolve(result * 2), 1000));
  const asyncFunc3 = (result) => new Promise((resolve) => setTimeout(() => resolve(result - 3), 1000));
  
  sequenceAsync([asyncFunc1, asyncFunc2, asyncFunc3], 0).then(console.log); // Очікуваний результат: ((0 + 1) * 2) - 3 = -1