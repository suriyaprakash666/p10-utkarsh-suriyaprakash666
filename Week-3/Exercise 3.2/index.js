// Call
function greet() {
    console.log(`Hello, ${this.name}!`);
  }

  const person = {
    name: 'John'
  };

greet.call(person); // output: Hello, John!
  
  // Bind
  function greetWithGreeting(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }

  const greetHi = greetWithGreeting.bind(person, 'Hi');

  greetHi(); // output: Hi, Jane!

  // Apply
  
  function sum(a, b, c) {
    return a + b + c;
  }

  const result = sum.apply(null, [1, 2, 3]);
  console.log(result); // output: 6
  