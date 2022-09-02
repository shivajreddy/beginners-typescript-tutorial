import { expect, it } from "vitest";

// '?' next a property tells that this property is options.
export const getName = (params: { first: string; last?: string }): string => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// if using interface, same thing, put '?' next to a property of that interface to tell it's optional
interface Names {
  first: string;
  last?: string;
}

export const getName2 = (params: Names): string => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
