/*
  |============================
  | task-1
  |============================
*/
//Створіть клас або модуль, що реалізує структуру даних "стек".
//Реалізуйте основні операції зі стеком: push(додавання елемента),
//pop(видалення елемента), peek(отримання верхнього елемента),
//та isEmpty(перевірка на пустоту).
console.warn("task-1");
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
// Виведення результату в консоль
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("Is Empty:", stack.isEmpty());
/*
  |============================
  | task-2
  |============================
*/
// Напишіть функцію, яка використовує стек для перевірки балансу дужок у виразі.
// Ваша функція повинна повертати True, якщо всі дужки вираження збалансовані,
// та False в іншому випадку.
console.warn("task-2");
function isBalanced(expression) {
  let stack = new Stack();

  for (let char of expression) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }

      let top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}
// Приклад використання для балансування дужок
let expression1 = "{[()]()}";
let expression2 = "{[()](({";
console.log(
  `Expression "${expression1}" is balanced: ${isBalanced(expression1)}`
);
console.log(
  `Expression "${expression2}" is balanced: ${isBalanced(expression2)}`
);
/*
  |============================
  | task-3
  |============================
*/
// Розробіть алгоритм для обчислення виразу, представленого у зворотньому польському
// запису, використовуючи стек.Допустимі операції: +, -, *, /.
console.warn("task-3");
function evaluateRPN(rpnExpression) {
  const stack = new Stack();
  const operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  const tokens = rpnExpression.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else if (token in operators) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      stack.push(operators[token](operand1, operand2));
    } else {
      throw new Error("Invalid token in RPN expression");
    }
  }
  console.log(rpnExpression);
  console.log("Result:", stack.pop());
}

// Виведення результату в консоль
evaluateRPN("3 4 + 2 *");
/*
  |============================
  | task-4
  |============================
*/
// реалізуйте імітацію обчислення факторіала за допомогою стеку:
console.warn("task-4");
function simulateFactorialCalculation(number) {
  let stack = new Stack();
  let result = 1;
  for (let i = number; i > 1; i--) {
    stack.push(i);
  }
  while (!stack.isEmpty()) {
    result *= stack.pop();
  }
  return result;
}

// Приклад використання для імітації обчислення факторіала
let numberToCalculate = 5;
console.log(`Simulating factorial calculation for ${numberToCalculate}!`);
console.log(`Result: ${simulateFactorialCalculation(numberToCalculate)}`);
