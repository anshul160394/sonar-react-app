export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
};

export const power = (base, exp) => Math.pow(base, exp);

export const modulus = (a, b) => {
  if (b === 0) throw new Error("Cannot perform modulus with zero.");
  return a % b;
};
