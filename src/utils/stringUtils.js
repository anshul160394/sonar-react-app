export const reverseString = (text) => {
  if (typeof text !== "string") throw new TypeError("Input must be a string.");
  return text.split("").reverse().join("");
};

export const isPalindrome = (text) => {
  if (typeof text !== "string") throw new TypeError("Input must be a string.");
  const cleaned = text.replace(/\s/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};

export const wordCount = (text) => {
  if (typeof text !== "string") throw new TypeError("Input must be a string.");
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

export const truncate = (text, maxLength) => {
  if (typeof text !== "string") throw new TypeError("Input must be a string.");
  if (maxLength <= 0) throw new Error("maxLength must be greater than 0.");
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const capitalizeWords = (text) => {
  if (typeof text !== "string") throw new TypeError("Input must be a string.");
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};
