import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupForm from "@/components/macos/SetupForm.tsx";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { Button } from "konsta/react";

export default function ConversationStyleSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/setup");
  const db = useDb();
  const [value, setValue] = useState<string>(
    config.conversationConfig.promptTemplateId,
  );
  const { t: dynamicT } = useDynamicTranslation();

  const initialPromptTemplates = useLiveQuery(
    () =>
      db.promptTemplates
        .filter((template) => Boolean(template.isInitial))
        .toArray(),
    [],
  );

  const promptTemplate = useLiveQuery(
    () => db.promptTemplates.get(value),
    [value],
  );

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
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("conversationStyleContent.title")} enableBack />
      <div className="flex w-full flex-col items-center gap-[20px] px-[15px] pt-[32px] tablet:px-[80px] desktop:px-[190px]">
        {initialPromptTemplates && (
          <SegmentedControlBar
            flexible
            options={[
              ...initialPromptTemplates.map((template) => ({
                value: template.uuid,
                label: dynamicT(template.metadata.name),
              })),
              {
                value: "custom",
                label: t("conversationStyleContent.styles.custom.name"),
              },
            ]}
            value={value}
            onChange={setValue}
          />
        )}
        {value !== "custom" ? (
          <>
            <SegmentBoard
              flexible
              imgBlob={
                promptTemplate?.metadata.descriptionImg
                  ? dynamicT(promptTemplate?.metadata.descriptionImg)
                  : undefined
              }
              alt={`description image for ${value}`}
            />
            <div className="text-center text-16p leading-[18px]">
              {promptTemplate?.metadata.description &&
                dynamicT(promptTemplate?.metadata.description)}
            </div>
            {promptTemplate &&
            initialPromptTemplates &&
            config.conversationConfig.promptTemplateId !== value ? (
              <Button className="max-w-fit rounded-[12px] px-[18px] py-[21px] text-18p leading-[22px]">
                바꾸기
              </Button>
            ) : null}
          </>
        ) : (
          <div className="mt-[14px] flex w-full justify-center">
            <SetupForm flexible setupFormRows={CustomStyleFormRows} />
          </div>
        )}
      </div>
    </div>
  );
}
