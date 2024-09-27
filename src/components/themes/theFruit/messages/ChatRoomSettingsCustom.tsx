import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";
import { PiCaretLeftBold } from "react-icons/pi";
import ListContainer from "@/components/common/ListContainer.tsx";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";
import { ListItem } from "konsta/react";
import { useTranslation } from "react-i18next";

export default function ChatRoomSettingsCustom({ chatRoomId }: ChatRoomProps) {
  console.log(chatRoomId); // TODO <- 삭제
  const { t } = useTranslation("pages/msg");
  return (
    <div className="bg-emptyBackground size-full">
      <div className="border-border relative flex w-full items-center justify-center border-b py-[18px]">
        <div
          className="text-24p text-accentBlue absolute left-[9px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <PiCaretLeftBold />
        </div>
        <span className="text-20p font-semibold leading-[22px]">
          {t("settings.custom.title")}
        </span>
      </div>

      <div className="tablet:px-[80px] desktop:px-[190px] flex w-full flex-col items-center gap-[20px] px-[15px]">
        <div className="text-16p mt-[20px] w-full max-w-[900px] pl-[15px] leading-[22px] text-black/50">
          {t("settings.custom.description")}
        </div>
        <ListContainer>
          <ListLinkItem
            title={t("settings.custom.options.style.label")}
            link="conversation-style"
            after={t("settings.custom.options.style.choices")}
          />
          <ListLinkItem title="이중 번역" link="translation" after="사용" />
          <ListLinkItem
            title={t("settings.custom.options.typing.label")}
            link="typing-simulation"
            after={t("settings.custom.options.typing.choices")}
          />
          <ListLinkItem
            title={t("settings.custom.options.self-intro")}
            link="persona"
            isLast
          />
        </ListContainer>
        <ListContainer>
          <ListItem
            title={
              <p className="text-red">{t("settings.custom.options.default")}</p>
            }
            link
          />
        </ListContainer>
      </div>
    </div>
  );
}
