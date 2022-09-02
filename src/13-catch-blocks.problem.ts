import { expect, it } from "vitest";

interface ExpressType {
  status: number;
  msg: string;
}

class ExpressError extends Error {
  status: number;
  msg: string;
  readonly inside: string = "shiva";
  constructor(status: number, msg: string) {
    super();
    this.status = status;
    this.msg = msg;
    this.inside = "reddy";
    console.error(this.stack);
  }

  // method
  func21() {
    this.status = 21;
  }
}

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: any) {
    return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
