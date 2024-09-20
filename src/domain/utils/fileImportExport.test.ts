import { describe, it, expect } from "vitest";
import { importFile, exportFile } from "./fileImportExport.ts"; // 실제 파일 경로에 맞게 수정하세요.
import { z } from "zod";
import superjson from "superjson";

describe("File Import/Export Tests", () => {
  const fileSchema = z.object({
    name: z.string(),
    age: z.number(),
  });

  // 가짜 File 객체 생성
  const mockFile = new File(
    [superjson.stringify({ name: "John", age: 30 })],
    "test.json",
    {
      type: "application/json",
    },
  );

  it("should import file and validate data correctly", async () => {
    const result = await importFile(mockFile, fileSchema);

    expect(result).toEqual({ name: "John", age: 30 });
  });

  it("should export validated data to a blob", async () => {
    const data = { name: "John", age: 30 };

    // exportFile이 Blob을 반환하는지 확인
    const blob = await exportFile(data, fileSchema);

    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe("application/json");

    // Blob의 내용을 확인
    const blobText = await blob.text();
    const parsedBlobData = superjson.parse(blobText);

    expect(parsedBlobData).toEqual({ name: "John", age: 30 });
  });
});
