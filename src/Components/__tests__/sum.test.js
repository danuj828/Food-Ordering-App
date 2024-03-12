import { div, mul, sub, sum } from "../Sum";

test("calculate the sum of two numbers", () => {
  const ans = sum(12, 4);
  expect(ans).toBe(16);
});

test("calculate the sub of two numbers", () => {
  const ans = sub(12, 4);
  expect(ans).toBe(8);
});

test("calculate the div of two numbers", () => {
  const ans = div(12, 4);
  expect(ans).toBe(3);
});

test("calculate the mul of two numbers", () => {
  const ans = mul(12, 4);
  expect(ans).toBe(48);
});
