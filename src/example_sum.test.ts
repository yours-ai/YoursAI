import { expect, test } from "vitest";
import { example_sum } from "./example_sum.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(example_sum(1, 2)).toBe(3);
});
