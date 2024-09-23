import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import SettingTopBar from "@/components/SettingTopBar.tsx";

export function Component() {
  useRightPrimaryPage();
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={"Sponsors"} enableBack />
    </div>
  );
}

Component.displayName = "SponsorSettingPage";
