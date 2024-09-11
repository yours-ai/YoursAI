import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";

export function Component() {
  const { settingsId } = useParams();
  useRightPrimaryPage();

  return (
    <div className="size-full">
      <div className="flex size-96 items-center justify-center bg-gray-200 text-3xl">
        This is setting detail page for id: {settingsId}
      </div>
      <Link to="../">Back</Link>
    </div>
  );
}

Component.displayName = "SettingDetailPage";
