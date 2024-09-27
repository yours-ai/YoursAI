import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { SettingSponsor },
  } = theme;
  return <SettingSponsor />;
}

Component.displayName = "SponsorSettingPage";
