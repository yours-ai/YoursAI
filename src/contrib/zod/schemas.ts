import { z } from "zod";

export const blobSchema = z.custom<Blob>((value) => value instanceof Blob, {
  message: "Invalid blob",
});

export const translatableBlobSchema = z.object({
  en: blobSchema,
  ko: blobSchema.optional(),
});
