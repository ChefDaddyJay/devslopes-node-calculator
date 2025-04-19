function calculator() {
  const rs = require("readline-sync");

  const input = rs.question("Enter your operation: ").replace(/\s+/g, "");
  const nums = input.match(/([0-9]*[.])?[0-9]+/g).map((i) => Number(i));
  const ops = [...input.replace(/([0-9]*[.])?[0-9]+/g, "")];

  let result = 0;
  if (validateOperation(nums, ops)) result = performOperation(nums, ops);
  else {
    console.log(`${input} is not a valid operation.`);
    calculator();
    return;
  }
  console.log(`Performing: ${formatOperation(nums, ops)}`);
  console.log(`The result is ${result}`);
}

function formatOperation(nums, ops) {
  let result = "";
  ops.forEach((op, i) => {
    result += `${nums[i]} ${op} `;
  });
  result += nums[ops.length];

  return result;
}

function performOperation(nums, ops) {
  let result = nums[0];
  let remainder = 0;
  ops.forEach((op, i) => {
    switch (op) {
      case "+":
        result += nums[i + 1];
        break;
      case "-":
        result -= nums[i + 1];
        break;
      case "*":
        result *= nums[i + 1];
        break;
      case "/":
        result /= nums[i + 1];
        break;
      default:
        throw new Error("Invalid operation");
    }
  });
  return result;
}

function validateOperation(nums, ops) {
  const supportedOperations = ["+", "-", "*", "/"];

  if (nums.length - 1 !== ops.length) {
    console.log("Invalid number of terms.");
    return false;
  }

  let valid = true;
  ops.forEach((op) => {
    if (!supportedOperations.includes(op)) {
      valid = false;
      console.log(`${op} is not a supported operation.`);
    }
  });
  return valid;
}

calculator();
