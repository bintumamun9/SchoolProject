function getRandomTsCode(): string {
  const randomNumber = Math.floor(Math.random() * 10);
  let code: string;

  switch (randomNumber) {
    case 0:
      code = "console.log('Hello World!');";
      break;
    case 1:
      code = `const name: string = 'John';
      console.log(name);`;
      break;
    case 2:
      code = `interface Person {
        name: string;
        age: number;
      }
      
      const person: Person = {
        name: 'John',
        age: 30,
      };
      
      console.log(person);`;
      break;
    case 3:
      code = `class Greeter {
        greet() {
          console.log('Hello World!');
        }
      }
      
      const greeter: Greeter = new Greeter();
      greeter.greet();`;
      break;
    case 4:
      code = `const numbers: number[] = [1, 2, 3, 4, 5];
      console.log(numbers);`;
      break;
    case 5:
      code = `const people: Person[] = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
      console.log(people);`;
      break;
    case 6:
      code = `function addNumbers(a: number, b: number): number {
        return a + b;
      }
      
      const result = addNumbers(3, 5);
      console.log(result);`;
      break;
    case 7:
      code = `class Calculator {
        add(a: number, b: number): number {
          return a + b;
        }
        
        subtract(a: number, b: number): number {
          return a - b;
        }
      }
      
      const calculator = new Calculator();
      
      const result1 = calculator.add(3, 5);
      const result2 = calculator.subtract(7, 2);
      
      console.log(result1);
      console.log(result2);`;
      break;
    case 8:
      code = `const people: Person[] = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
      
      for (let person of people) {
        console.log(person.name);
      }`;
      break;
    case 9:
      code = `const numbers: number[] = [1, 2, 3, 4, 5];
      
      for (let number of numbers) {
        console.log(number);`;
      break;
    case 10:
      code = `interface Person {
        name: string;
        age: number;
      }
      
      const people: Person[] = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
      
      for (let person of people) {
        console.log(person.name);
        console.log(person.age);`;
      break;
    default:
      code = "console.log('This is a random Ts code');";
  }

  return code;
}
