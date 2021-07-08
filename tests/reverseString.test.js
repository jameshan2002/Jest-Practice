const reverseString = require("../code/reverseString");
const { TestWatcher } = require("jest");

test("Reverse String Test 1", () => {
  expect(reverseString("wait")).toBe("tiaw");
});
