import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {};

/** Solution:
 * explicitly tell that defaultUser variable is of type 'User',
 * and you can use VSCode's TS refactoring to type in all the missing properties
 * So just right click and select 'Add missing properties'
 */
const defaultUser2: User = {
  id: 1,
  firstName: "",
  lastName: "",
  isAdmin: false,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser2)).toEqual(1);
});
