import { add, subtract, multiply, divide, power, modulus } from "./calculator";

describe("Calculator Utils", () => {
  test("add returns correct sum", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtract returns correct difference", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiply returns correct product", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 100)).toBe(0);
  });

  test("divide returns correct result", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divide throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero.");
  });

  test("power returns correct result", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
  });

  test("modulus returns correct remainder", () => {
    expect(modulus(10, 3)).toBe(1);
    expect(modulus(20, 5)).toBe(0);
  });

  test("modulus throws on zero divisor", () => {
    expect(() => modulus(10, 0)).toThrow("Cannot perform modulus with zero.");
  });
});
