import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useTranslation } from "react-i18next";

export default function TypingSimulationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/friends");
  const [isChecked, setIsChecked] = useState<boolean>(
    config.conversationConfig.doTypingSimulation,
  );
  return (
    <div className="bg-emptyBackground size-full">
      <SettingTopBar title={t("settings.options.typing.label")} enableBack />
      <div className="tablet:px-[80px] desktop:px-[190px] flex w-full flex-col items-center px-[15px] pt-[32px]">
        <ListContainer>
          <ListItem
            title={t("settings.options.typing.label")}
            after={
              <Toggle
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className="k-color-green -my-1"
              />
            }
          />
        </ListContainer>
      </div>
    </div>
  );
}
