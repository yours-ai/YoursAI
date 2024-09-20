import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const blobSchema = z.custom<Blob>((value) => value instanceof Blob, {
  message: "Invalid blob",
});

export const translatableBlobSchema = z.object({
  en: blobSchema,
  ko: blobSchema.optional(),
});

export const pkSchema = z.string().uuid().default(uuidv4);
