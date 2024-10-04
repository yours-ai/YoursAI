import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import { ListItem, Toggle } from "konsta/react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useState } from "react";

export default function TranslationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const doTranslation = config.conversationConfig.doTranslation;
  const [isChecked, setIsChecked] = useState<boolean>(doTranslation);
  return (
    <div className="bg-emptyBackground size-full">
      <SettingTopBar title="이중 번역" enableBack />
      <div className="tablet:px-[80px] desktop:px-[190px] flex w-full flex-col items-center px-[15px] pt-[32px]">
        <ListContainer>
          <ListItem
            title="이중 번역"
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
