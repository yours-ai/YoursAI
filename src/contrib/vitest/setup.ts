import { vi } from "vitest";

vi.mock("../../utils.ts", () => {
  return {
    fetchImageAsBlob: vi.fn(() => Promise.resolve(new Blob())), // 함수 mocking
  };
});
