import { test, expect } from "vitest";
import { flatJsonSchemaSchema, modelSchema } from "@/contrib/zod/schemas.ts";

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
    additionalProperties: false,
  };
  const parsed = flatJsonSchemaSchema.parse(sampleJsonSchema);
  expect(parsed).toEqual(sampleJsonSchema);
});

test("empty default model schema", () => {
  const instance = modelSchema.parse({});
  expect(instance).toEqual({
    pk: expect.any(String),
    created: expect.any(Date),
  });
});

test("default model schema with undefined", () => {
  const instance = modelSchema.parse({ pk: undefined });
  expect(instance).toEqual({
    pk: expect.any(String),
    created: expect.any(Date),
  });
});
