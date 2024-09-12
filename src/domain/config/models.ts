import { z } from "zod";

export const AvailableBundledThemeIds = ["theFruit"] as const; // TODO: Add more themes

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

export const globalConfigSchema = z.object({
  theme: themeConfigSchema,
});

export type ThemeConfig = z.infer<typeof themeConfigSchema>;
export type GlobalConfig = z.infer<typeof globalConfigSchema>;
