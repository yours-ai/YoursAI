import { z } from "zod";

export const DefaultLocale = "en" as const;
export const AvailableLocales = ["en", "ko"] as const;

export type AvailableLocale = (typeof AvailableLocales)[number];

// Only DefaultLocale is required, others are optional
export type Translatable<T> = Required<Record<typeof DefaultLocale, T>> &
  Partial<Record<Exclude<AvailableLocale, typeof DefaultLocale>, T>>;

export type TranslatableString = Translatable<string>;

export const translatableStringSchema = z.object({
  en: z.string(),
  ko: z.string().optional(),
});
