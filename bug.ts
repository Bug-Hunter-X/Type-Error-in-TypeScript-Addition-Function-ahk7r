function printNumber(num: number): void {
  console.log(num);
}

function add(x: number, y: number): number {
  return x + y;
}

const result = add(5, '10'); // Type 'string' is not assignable to type 'number'.
printNumber(result);