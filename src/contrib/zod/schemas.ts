import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import ajv from "@/contrib/ajv.ts";

export const blobSchema = z.custom<Blob>((value) => value instanceof Blob, {
  message: "Invalid blob",
});

export const translatableBlobSchema = z.object({
  en: blobSchema,
  ko: blobSchema.optional(),
});

export const pkSchema = z.string().uuid().default(uuidv4);
export const createdSchema = z.date().default(() => new Date());

export const modelSchema = z.object({
  pk: pkSchema,
  created: createdSchema,
});

export type ModelSchema = z.infer<typeof modelSchema>;

type MakeFieldsOptional<T extends ModelSchema, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type ModelSchemaDto<T extends ModelSchema> = MakeFieldsOptional<
  T,
  "pk" | "created"
>;

const propertiesSchema = z.record(
  z.string(),
  z.object({
    type: z.enum(["string", "number", "boolean", "integer"]),
    description: z.string().min(1),
    enum: z.array(z.string()).optional(),
  }),
);

export const flatJsonSchemaSchema = z
  .object({
    type: z.enum(["object"]),
    properties: propertiesSchema,
    required: z.array(z.string().min(1)),
    additionalProperties: z.boolean().default(true).optional(),
  })
  .refine(
    (data) => {
      try {
        ajv.compile(data);
        return true;
      } catch (_error) {
        return false;
      }
    },
    {
      message: "Invalid JSON schema.",
    },
  );
