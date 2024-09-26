import { expect, test } from "vitest";
import { handlebarsTemplateSchema } from "@/domain/chatGenerate/models/messageItem.ts";

test("simple text is valid for handlebars", () => {
  const handlebarsTemplate = "Hello, chanuk!";
  expect(handlebarsTemplateSchema.parse(handlebarsTemplate)).toBeTruthy();
});

test("simple persona usage is valid for handlebars", () => {
  const handlebarsTemplate = "Hello, {{persona.firstName}}!";
  expect(handlebarsTemplateSchema.parse(handlebarsTemplate)).toBeTruthy();
});

test("not available variable is error for handlebars", () => {
  const handlebarsTemplate = "Hello, {{a.b.c}}!";
  expect(() => handlebarsTemplateSchema.parse(handlebarsTemplate)).toThrow();
});

test("flat usage not available variable is error for handlebars", () => {
  const handlebarsTemplate = "Hello, {{a}}!";
  expect(() => handlebarsTemplateSchema.parse(handlebarsTemplate)).toThrow();
});
