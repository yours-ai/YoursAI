import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { SettingLanguage },
  } = theme;
  return <SettingLanguage />;
}

Component.displayName = "LanguageSettingPage";
