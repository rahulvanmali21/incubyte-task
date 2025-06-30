const { add } = require("./calculator");

describe("String Calculator - add()", () => {
  describe("Basic cases", () => {
    test("returns 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });
    
    test("returns the number itself for a single number", () => {
      expect(add("1")).toBe(1);
      expect(add("42")).toBe(42);
    });
    
    test("returns the sum for two numbers separated by comma", () => {
      expect(add("1,5")).toBe(6);
    });
    
    test("returns the sum for multiple comma-separated numbers", () => {
      expect(add("1,2,3,4,5")).toBe(15);
    });

    test("throws error for single negative value", () => {
      expect(() => add("1,-2,3,4,5")).toThrow("negative numbers not allowed: -2");
    });
    
    test("throws error for multiple negative value", () => {
      expect(() => add("1,-2,-3,4,5")).toThrow(
        "negative numbers not allowed: -2, -3"
      );
    });
  });
  
  // new line delimiter
  describe("Supports new lines as delimiters", () => {
    test("returns the sum when newlines are mixed with commas", () => {
      expect(add("1\n2,3")).toBe(6);
      expect(add("10\n20\n30")).toBe(60);
    });
  });

  describe("Any Numbers greater than equal 1000", () => {
    test("Skiping numbers > 1000", () => {
      expect(add("1\n2,3,1000")).toBe(6);
      expect(add("1\n2,3,999")).toBe(1005);
      expect(add("1\n2,3,1000,100000")).toBe(6);

    });
  });

  describe("Supports custom delimiters", () => {
    test('supports custom delimiter syntax "//;\\n1;2"', () => {
      expect(add("//;\n1;2")).toBe(3);
    });
    
    test('supports custom delimiter syntax "//;\\n1;2"', () => {
      expect(add("//*\n1*2")).toBe(3);
    });
    
    test('supports custom delimiter syntax "//`\\n1`2"', () => {
      expect(add("//`\n2`2")).toBe(4);
    });
    
    test('supports custom delimiter syntax with negative value "//;\\n1;2"', () => {
      expect(() => add("//;\n3;-2")).toThrow("negative numbers not allowed: -2");
    });
    
    test('supports custom delimiter syntax with multiple negative value "//;\\n1;2"', () => {
      expect(() => add("//;\n-3;-2")).toThrow(
        "negative numbers not allowed: -3, -2"
      );
    });
  });
});