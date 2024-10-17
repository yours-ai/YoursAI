import React, { useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { useTranslation } from "react-i18next";
import SetupForm from "@/components/macos/SetupForm.tsx";
import Sheet from "@/components/macos/Sheet.tsx";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { GlobalConfig } from "@/domain/config/models.ts";

export interface Props {
  config: GlobalConfig;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function ConversationStyleSheet({ config, setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [value, setValue] = useState<string>(
    config.conversationConfig.promptTemplateId,
  );
  const mutation = useMutation({
    mutationFn:
      makeGlobalConfigRepository(useDb()).updateGlobalConversationConfig,
    onSuccess() {
      setStep((prev) => prev + 1);
    },
  });
  const { t: dynamicT } = useDynamicTranslation();
  const db = useDb();
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
      action: <SetupControlButton upload />,
    },
    {
      rowTitle: t("conversationStyleContent.styles.custom.moduleFile.name"),
      action: <SetupControlButton upload />,
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
            disabled={value === "custom"}
            onClick={() => {
              if (!mutation.isPending) {
                if (value !== "custom") {
                  /* TODO: implement custom prompt template */
                  mutation.mutate({
                    promptTemplateId: value,
                  });
                }
              }
            }}
          />
        </>
      }
      content={
        <>
          <div className="relative z-40 flex items-center">
            <SettingTitle title={t("conversationStyleContent.title")} />
          </div>

          <div className="mt-[24px] flex w-full flex-col items-center gap-[17px] px-[20px] phone:px-0">
            {initialPromptTemplates && (
              <SegmentedControlBar
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
                  imgBlob={
                    promptTemplate?.metadata.descriptionImg
                      ? dynamicT(promptTemplate?.metadata.descriptionImg)
                      : undefined
                  }
                  alt={`description image for ${value}`}
                />
                <div className="text-center text-13p leading-[16px]">
                  {promptTemplate?.metadata.description &&
                    dynamicT(promptTemplate?.metadata.description)}
                </div>
              </>
            ) : (
              <div className="mt-[14px]">
                <SetupForm setupFormRows={CustomStyleFormRows} />
              </div>
            )}
          </div>
        </>
      }
    />
  );
}
