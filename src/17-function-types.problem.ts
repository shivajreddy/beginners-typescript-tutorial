import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

type sometype = (inp: boolean) => void;

const addListener = (onFocusChange: sometype) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
