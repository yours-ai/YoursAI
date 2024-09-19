import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem } from "konsta/react";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

export function Component() {
  const [selectedLanguage, setSelectedLanguage] = useState<"ko" | "en">("ko"); // 추후 dynamic하게 바꿔야함
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="언어" />
      <div className="flex w-full flex-col gap-[20px] px-[190px] pt-[32px]">
        <ListContainer>
          <ListItem
            link
            chevron={false}
            title="한국어"
            after={
              selectedLanguage === "ko" ? (
                <PiCheckBold className="text-24p text-accentBlue" />
              ) : null
            }
            onClick={() => setSelectedLanguage("ko")}
          />
          <ListItem
            link
            chevron={false}
            title="English"
            after={
              selectedLanguage === "en" ? (
                <PiCheckBold className="text-24p text-accentBlue" />
              ) : null
            }
            onClick={() => setSelectedLanguage("en")}
          />
        </ListContainer>
      </div>
    </div>
  );
}

Component.displayName = "LanguageSettingPage";
