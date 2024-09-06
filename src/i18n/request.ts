import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) notFound();

  const filesToLoad = [
    "start/page",
    "start/areYouThere",
    "start/initial-setup/page",
    "start/initial-setup/sheet",
    "start/content/languageContent",
    "start/content/dataContent",
    "start/content/themeContent",
    "start/content/talkStyleContent",
    "start/content/apiKeyContent",
    "start/content/typingSimulationContent",
    "start/content/nameContent",
  ];

  const messages: Record<string, any> = {};

  for (const file of filesToLoad) {
    const namespace = file;
    const translations = await import(`../../locales/${locale}/${file}.json`);
    messages[namespace] = translations.default;
  }

  return {
    messages,
  };
});
