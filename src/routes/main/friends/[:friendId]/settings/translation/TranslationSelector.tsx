import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import { ListItem, Toggle } from "konsta/react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useState } from "react";

function TranslationSelector({ config }: { config: GlobalConfig }) {
  const doTranslation = config.conversationConfig.doTranslation;
  const [isChecked, setIsChecked] = useState<boolean>(doTranslation);
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="이중 번역" enableBack />
      <div className="flex w-full flex-col items-center px-[30px] pt-[32px] tablet:px-[80px] desktop:px-[190px]">
        <ListContainer>
          <ListItem
            title="이중 번역"
            after={
              <Toggle
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className="-my-1 k-color-green"
              />
            }
          />
        </ListContainer>
      </div>
    </div>
  );
}

export default TranslationSelector;
