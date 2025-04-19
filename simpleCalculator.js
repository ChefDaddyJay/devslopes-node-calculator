function calculator() {
  const rs = require("readline-sync");
  const supportedOperations = ["+", "-", "*", "/"];
  const operation = rs.question(
    `What operation (${supportedOperations}) would you like to perform? `
  );

  if (!supportedOperations.includes(operation)) {
    console.log("That is not a valid operation.");
    calculator();
    return;
  }

  const num1 = rs.questionFloat("Please enter the first number: ");
  const num2 = rs.questionFloat("Please enter the second number: ");

  console.log(`Performing: ${num1} ${operation} ${num2}`);
  let result = 0;
  let remainder = 0;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      remainder = num1 % num2;
      result = (num1 - remainder) / num2;
      break;
    default:
      result = "Unsupported operation";
  }

  if (remainder !== 0)
    console.log(`The result is: ${result} with a remainder of ${remainder}`);
  else console.log(`The result is: ${result}`);
}

calculator();
