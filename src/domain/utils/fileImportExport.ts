import { z } from "zod";
import superjson from "superjson";
import toast from "react-hot-toast";

export const importFile = async <T>(
  file: File,
  schema: z.ZodSchema<T>,
): Promise<T> => {
  const text = await file.text();
  const parsed = superjson.parse(text);
  try {
    return schema.parse(parsed);
  } catch (error) {
    toast.error("잘못된 캐릭터 파일 형식입니다!");
    console.log("잘못된 캐릭터파일 형식입니다", error);
    throw error;
  }
};

export const exportFile = async <T>(
  data: T,
  schema: z.ZodSchema<T>,
): Promise<Blob> => {
  const validatedData = schema.parse(data);
  const serializedData = superjson.stringify(validatedData);
  return new Blob([serializedData], { type: "application/json" });
};
