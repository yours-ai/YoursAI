import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import { GlobalConfig } from "@/domain/config/models.ts";

function TypingSimulationSelector({ config }: { config: GlobalConfig }) {
  const [isChecked, setIsChecked] = useState<boolean>(
    config.conversationConfig.doTypingSimulation,
  );
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="타이핑 시뮬레이션" enableBack />
      <div className="flex w-full flex-col items-center px-[30px] pt-[32px] tablet:px-[80px] desktop:px-[190px]">
        <ListContainer>
          <ListItem
            title="타이핑 시뮬레이션"
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

export default TypingSimulationSelector;
