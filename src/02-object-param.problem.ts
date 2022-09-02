import { expect, it } from "vitest";

// Interface
interface Params {
  first: number;
  second: number;
}

// type
type AddTwoNumberParams = {
  first: number;
  second: number;
};

// Solution using interface
export const addTwoNumbers = (params: Params) => {
  return params.first + params.second;
};

// Solution using type
export const addTwoNumbers2 = (params: AddTwoNumberParams) => {
  return params.first + params.second;
};

// Defining type object right next to it
export const addTwoNumbers3 = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
