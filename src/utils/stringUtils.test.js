import { reverseString, isPalindrome, wordCount, truncate, capitalizeWords } from "./stringUtils";

describe("String Utils", () => {
  test("reverseString works correctly", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("")).toBe("");
  });

  test("reverseString throws TypeError for non-string", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });

  test("isPalindrome returns true", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("isPalindrome returns false", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("isPalindrome throws TypeError", () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
  });

  test("wordCount counts correctly", () => {
    expect(wordCount("hello world")).toBe(2);
    expect(wordCount("")).toBe(0);
    expect(wordCount("one")).toBe(1);
  });

  test("wordCount throws TypeError", () => {
    expect(() => wordCount(42)).toThrow(TypeError);
  });

  test("truncate works correctly", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hi", 10)).toBe("Hi");
  });

  test("truncate throws on invalid length", () => {
    expect(() => truncate("Hello", 0)).toThrow();
  });

  test("capitalizeWords works correctly", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });
});
