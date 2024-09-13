import { z } from "zod";
import superjson from "superjson";

export const importFile = async <T>(
  file: File,
  schema: z.ZodSchema<T>,
): Promise<T> => {
  const text = await file.text();
  const parsed = superjson.parse(text);
  return schema.parse(parsed);
};

export const exportFile = async <T>(
  data: T,
  schema: z.ZodSchema<T>,
): Promise<Blob> => {
  const validatedData = schema.parse(data);
  const serializedData = superjson.stringify(validatedData);
  return new Blob([serializedData], { type: "application/json" });
};
