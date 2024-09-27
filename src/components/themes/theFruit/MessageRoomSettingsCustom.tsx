import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import { PiCaretLeftBold } from "react-icons/pi";
import ListContainer from "@/components/common/ListContainer.tsx";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";
import { ListItem } from "konsta/react";
import { useTranslation } from "react-i18next";

export default function MessageRoomSettingsCustom({
  messageRoomId,
}: MessageRoomProps) {
  console.log(messageRoomId); // TODO <- 삭제
  const { t } = useTranslation("pages/msg");
  return (
    <div className="size-full bg-emptyBackground">
      <div className="relative flex w-full items-center justify-center border-b border-border py-[18px]">
        <div
          className="absolute left-[9px] cursor-pointer text-24p text-accentBlue"
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

      <div className="flex w-full flex-col items-center gap-[20px] px-[15px] tablet:px-[80px] desktop:px-[190px]">
        <div className="mt-[20px] w-full max-w-[900px] pl-[15px] text-16p leading-[22px] text-black/50">
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
