interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  // role: string;
  /** Solution
   * types can be be types of actual values too
   */
  role: "admin" | "user" | "super-admin";
}

// Same thing when using type declarations instead of interfaces
type User2 = {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
};

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
