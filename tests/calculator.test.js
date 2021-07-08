const calculator = require("../code/calculator");

test("Calculator Test 1", () => {
  expect(calculator.add(12, 4)).toBe(16);
});

test("Calculator Test 2", () => {
  expect(calculator.sub(12, 4)).toBe(8);
});

test("CALCULATOR TEST 3", () => {
  expect(calculator.div(2, 4)).toBe(0.5);
});

test("CALCULATOR TEST 4", () => {
  expect(calculator.mul(11, 11)).toBe(121);
});
