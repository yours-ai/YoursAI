import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";

export function Component() {
  useRightPrimaryPage();
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={"Sponsors"} enableHome />
    </div>
  );
}

Component.displayName = "SponsorSettingPage";
