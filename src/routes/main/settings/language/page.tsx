import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { Dialog, DialogButton, ListItem } from "konsta/react";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

export function Component() {
  const [selectedLanguage, setSelectedLanguage] = useState<"ko" | "en">("ko"); // 추후 dynamic하게 바꿔야함
  const [koOpened, setKoOpened] = useState<boolean>(false);
  const [enOpened, setEnOpened] = useState<boolean>(false);
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
            onClick={() => {
              if (selectedLanguage !== "ko") {
                setKoOpened(true);
              }
            }}
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
            onClick={() => {
              if (selectedLanguage !== "en") {
                setEnOpened(true);
              }
            }}
          />
        </ListContainer>
      </div>
      <Dialog
        opened={koOpened}
        onBackdropClick={() => setKoOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            언어를 한국어로 변경하시겠어요?
          </p>
        }
        content={
          <p className="text-13p leading-[18px]">재시작이 필요합니다.</p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setKoOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={() => {
                setSelectedLanguage("ko");
                setKoOpened(false);
              }}
              className="font-semibold"
            >
              네
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={enOpened}
        onBackdropClick={() => setEnOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            언어를 English로 변경하시겠어요?
          </p>
        }
        content={<p className="text-13p leading-[18x]">재시작이 필요합니다.</p>}
        buttons={
          <>
            <DialogButton onClick={() => setEnOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={() => {
                setSelectedLanguage("en");
                setEnOpened(false);
              }}
              className="font-semibold"
            >
              네
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "LanguageSettingPage";
