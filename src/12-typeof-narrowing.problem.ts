import { expect, it } from "vitest";

const coerceAmount = (
  amount: number | { amount: number; something: number }
) => {
  if (typeof amount === "number") {
    return amount;
  }
  return [amount.amount, amount.something];
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20, something: 21 })).toEqual([20, 21]);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

const addPadding = (strs: string | string[]) => {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  }
};
