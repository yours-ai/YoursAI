import { z } from "zod";

export const DefaultLanguage = "en" as const;
export const AvailableLanguages = ["en", "ko"] as const;

export const availableLanguageSchema = z.enum(AvailableLanguages);

export type AvailableLanguage = z.infer<typeof availableLanguageSchema>;

export const translatableStringSchema = z.object({
  en: z.string(),
  ko: z.string().optional(),
});

// Only DefaultLocale is required, others are optional
export type Translatable<T> = Required<Record<typeof DefaultLanguage, T>> &
  Partial<Record<Exclude<AvailableLanguage, typeof DefaultLanguage>, T>>;

export type TranslatableString = Translatable<string>;
