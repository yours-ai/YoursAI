import React, { useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { PiQuestionBold } from "react-icons/pi";
import { Trans, useTranslation } from "react-i18next";
import SetupForm from "@/components/macos/SetupForm.tsx";
import Tooltip from "@/components/macos/Tooltip.tsx";
import Sheet from "@/components/macos/Sheet.tsx";

export interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function ConversationStyleSheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [index, setIndex] = useState<number>(0);

  const CustomStyleFormRows = [
    {
      rowTitle: t("conversationStyleContent.styles.custom.styleFile.name"),
      rowDescription: t(
        "conversationStyleContent.styles.custom.styleFile.description",
      ),
      action: <SetupControlButton upload />,
    },
    {
      rowTitle: t("conversationStyleContent.styles.custom.moduleFile.name"),
      rowDescription: t(
        "conversationStyleContent.styles.custom.moduleFile.description",
      ),
      action: <SetupControlButton upload />,
    },
  ];

  const styles = [
    {
      title: t("conversationStyleContent.styles.balanced.name"),
      content: <SegmentBoard />,
      description: (
        <Trans
          i18nKey="conversationStyleContent.styles.balanced.description"
          t={t}
        >
          캐릭터가 적절히 대화 길이를 조절합니다.<br></br>종종 전지적 시점에서
          이야기하기도 합니다.
        </Trans>
      ),
    },
    {
      title: t("conversationStyleContent.styles.novel.name"),
      content: <SegmentBoard />,
      description: (
        <Trans
          i18nKey="conversationStyleContent.styles.novel.description"
          t={t}
        >
          당신이 짧게 이야기해도 캐릭터는 길게 이야기합니다.<br></br>자주 전지적
          시점에서 이야기합니다.
        </Trans>
      ),
    },
    {
      title: t("conversationStyleContent.styles.realistic.name"),
      content: <SegmentBoard />,
      description: (
        <Trans
          i18nKey="conversationStyleContent.styles.realistic.description"
          t={t}
        >
          현실의 대화와 비슷합니다.<br></br>캐릭터의 속마음을 알기는 어렵습니다.
        </Trans>
      ),
    },
    {
      title: t("conversationStyleContent.styles.custom.name"),
      content: (
        <div className="mt-[14px]">
          <SetupForm setupFormRows={CustomStyleFormRows} />
        </div>
      ),
    },
  ];

  return (
    <Sheet
      rightActions={
        <>
          <SetupControlButton
            onClick={() => setStep((prev) => prev - 1)}
            goBack
          />
          <SetupControlButton
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          />
        </>
      }
      content={
        <>
          <div className="relative z-40 flex items-center">
            <SettingTitle title={t("conversationStyleContent.title")} />
            <div className="absolute bottom-[8px] right-[-30px]">
              <Tooltip
                content={
                  <p className="relative z-20">
                    <Trans i18nKey="conversationStyleContent.info" t={t}>
                      RisuAI에 익숙하다면,<br></br>기존의 프롬프트 템플릿과
                      같습니다
                    </Trans>
                  </p>
                }
                placement="top-start"
              >
                <PiQuestionBold className="text-black/50" />
              </Tooltip>
            </div>
          </div>

          <div className="mt-[24px] flex w-full flex-col items-center gap-[17px]">
            <SegmentedControlBar segments={styles} setIndex={setIndex} />
            {styles[index].content}
            <div className="text-center text-13p leading-[16px]">
              {styles[index].description}
            </div>
          </div>
        </>
      }
    />
  );
}
