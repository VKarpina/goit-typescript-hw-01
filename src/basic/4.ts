function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc(5, 2));

function customError(message: string): never {
  throw new Error(message);
}

// customError("Critical error occurred!");
