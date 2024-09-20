import { test, expect } from "vitest";
import { flatJsonSchemaSchema } from "@/contrib/zod/schemas.ts";

test("validate flat json schema schema", () => {
  const sampleJsonSchema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the person",
      },
      age: {
        type: "integer",
        description: "The age of the person",
      },
    },
    required: ["name"],
    additionalProperties: "abc",
  };
  const parsed = flatJsonSchemaSchema.parse(sampleJsonSchema);
  expect(parsed).toEqual(sampleJsonSchema);
});
