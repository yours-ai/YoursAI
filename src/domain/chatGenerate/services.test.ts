import { expect, test } from "vitest";
import { getInitialPromptTemplates } from "@/domain/chatGenerate/populate.ts";
import OpenAI from "openai";
import ajv from "@/contrib/ajv.ts";

test("first chat using prompt template", async () => {
  const initialPromptTemplates = await getInitialPromptTemplates();
  const defaultPromptTemplate = initialPromptTemplates[0];
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const response = await openai.chat.completions.create({
    model: defaultPromptTemplate.model,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant to generate character response. the character name is sena, she is 20 years old japanese girl.",
      },
      { role: "user", content: "Hi Sena~" },
    ],
    tools: [
      {
        type: "function",
        function: defaultPromptTemplate.function,
      },
    ],
    tool_choice: {
      type: "function",
      function: {
        name: defaultPromptTemplate.function.name,
      },
    },
  });

  const result = JSON.parse(
    response.choices[0].message.tool_calls![0].function.arguments,
  );

  console.log(result);
});

test("if message is valid", async () => {
  const initialPromptTemplates = await getInitialPromptTemplates();
  const defaultPromptTemplate = initialPromptTemplates[0];

  const result = {
    chain_of_thought:
      "Sena is seeing a friend who is happy to greet her. She should respond warmly and friendly as well with a touch of excitement.",
    message: "Hi there! It's great to see you! How have you been?",
    emotion: "happy",
  };

  const validate = ajv.compile(defaultPromptTemplate.function.parameters);

  expect(validate(result)).toBe(true);
});

test("message with additional property is valid", async () => {
  const initialPromptTemplates = await getInitialPromptTemplates();
  const defaultPromptTemplate = initialPromptTemplates[0];

  const result = {
    chain_of_thought:
      "Sena is seeing a friend who is happy to greet her. She should respond warmly and friendly as well with a touch of excitement.",
    message: "Hi there! It's great to see you! How have you been?",
    emotion: "happy",
    handsome: true,
  };

  const validate = ajv.compile(defaultPromptTemplate.function.parameters);

  expect(validate(result)).toBe(true);
});

test("message with no property  is invalid", async () => {
  const initialPromptTemplates = await getInitialPromptTemplates();
  const defaultPromptTemplate = initialPromptTemplates[0];

  const result = {
    chain_of_thought:
      "Sena is seeing a friend who is happy to greet her. She should respond warmly and friendly as well with a touch of excitement.",
    message: "Hi there! It's great to see you! How have you been?",
  };

  const validate = ajv.compile(defaultPromptTemplate.function.parameters);

  expect(validate(result)).toBe(false);
});
