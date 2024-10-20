function logArguments(fn) {
    return function(...args) {
      console.log("Arguments:", ...args);  
      return fn(...args);  
    };
  }
  
  // Приклад використання
  function sum(a, b) {
    return a + b;
  }
  
  const loggedSum = logArguments(sum);
  
  console.log(loggedSum(5, 10));  



















  function validate(fn, validator) {
    return function(...args) {
      
      if (!validator(...args)) {
        throw new Error("Invalid arguments"); 
      }
      return fn(...args); 
    };
  }
  
  // Приклад використання
  function sum(a, b) {
    return a + b;
  }
  

  function isNumberValidator(...args) {
    return args.every(arg => typeof arg === 'number');
  }
  
  const validatedSum = validate(sum, isNumberValidator);
  
  try {
    console.log(validatedSum(5, 10)); 
    console.log(validatedSum(5, "10")); 
  } catch (error) {
    console.error(error.message);
  }














  function retry(fn, maxAttempts) {
    return function(...args) {
      let attempts = 0;
      let lastError;
  
      while (attempts < maxAttempts) {
        try {
          return fn(...args); 
        } catch (error) {
          lastError = error; 
          attempts++; 
          console.log(`Attempt ${attempts} failed. Retrying...`);
        }
      }
  
     
      throw lastError;
    };
  }
  
  // Приклад використання
  function mayFailOperation() {
    
    if (Math.random() < 0.5) {
      throw new Error("Random failure");
    }
    return "Success!";
  }
  
  const retryableOperation = retry(mayFailOperation, 3);
  
  try {
    console.log(retryableOperation()); 
  } catch (error) {
    console.error("Operation failed after 3 attempts:", error.message);
  }