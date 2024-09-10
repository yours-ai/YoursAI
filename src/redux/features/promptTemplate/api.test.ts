import { expect, test } from "vitest";
import OpenAI from "openai";

test("openrouter openai request success", async () => {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
    defaultHeaders: {
      "HTTP-Referer":
        import.meta.env.VITE_VERCEL_URL ?? import.meta.env.VITE_REFERER_URL, // Optional, for including your app on openrouter.ai rankings.
      "X-Title": import.meta.env.VITE_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
    },
  });
  const completion = await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: "Say this is a test" }],
  });

  expect(completion.choices[0].message.content).toBeTruthy();
});
