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
  });
  //   new line delimiter
  describe("Supports new lines as delimiters", () => {
    test("returns the sum when newlines are mixed with commas", () => {
      expect(add("1\n2,3")).toBe(6);
      expect(add("10\n20\n30")).toBe(60);
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
  });
});
