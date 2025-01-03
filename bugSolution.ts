function printNumber(num: number): void {
  console.log(num);
}

function add(x: number, y: number): number {
  return x + y;
}

const num1 = 5;
const num2 = parseFloat('10');

const result = add(num1, num2); // Now it works!
printNumber(result); 
// alternatively you can use type assertion like this
//const result = add(num1, <number>('10'));