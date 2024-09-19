import { z } from "zod";
import { availableLanguageSchema } from "@/locales/models.ts";

export const AvailableBundledThemeIds = ["theFruit", "chocolate"] as const; // TODO: Add more themes
export type AvailableBundledThemeId = (typeof AvailableBundledThemeIds)[number];

export const bundledThemeConfigSchema = z.object({
  type: z.literal("bundled"),
  id: z.enum(AvailableBundledThemeIds),
});

export const uploadedThemeConfigSchema = z.object({
  type: z.literal("uploaded"),
  script: z.string(),
});

export const themeConfigSchema = z.union([
  bundledThemeConfigSchema,
  uploadedThemeConfigSchema,
]);

export const GlobalConfigId = "oneAndOnly";

export const globalConfigSchema = z.object({
  id: z.enum([GlobalConfigId]),
  theme: themeConfigSchema,
  language: z.union([availableLanguageSchema, z.null()]),
  hasDoneSetup: z.boolean(),
});

export type ThemeConfig = z.infer<typeof themeConfigSchema>;
export type GlobalConfig = z.infer<typeof globalConfigSchema>;