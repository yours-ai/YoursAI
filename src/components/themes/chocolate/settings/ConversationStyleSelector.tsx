import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import ThemeItem from "@/components/themes/chocolate/settings/ThemeItem.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";

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

  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConversationConfig, // TODO: 이거 global, chat, friend 등 동적으로 가능하게끔해야됨
  });
  const changeConversationStyle = async (uuid: string) => {
    setValue(uuid);

    await mutation.mutateAsync({
      promptTemplateId: uuid,
    });
  };

  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar
        title={t("conversationStyleContent.title")}
        bgColor={"bg-white"}
      />

      <div className="flex w-full flex-col items-start gap-[20px] pt-5">
        {initialPromptTemplates &&
          Object.values(initialPromptTemplates).map((template) => (
            <ThemeItem
              alt={dynamicT(template.metadata.name)}
              imgBlob={
                template.metadata.descriptionImg
                  ? dynamicT(template.metadata.descriptionImg)
                  : undefined
              }
              title={dynamicT(template.metadata.name)}
              description={
                template.metadata.description
                  ? dynamicT(template.metadata.description)
                  : undefined
              }
              selected={value === template.uuid}
              onClick={() => changeConversationStyle(template.uuid)}
            />
          ))}
        {/* TODO: 대화 스타일 파일, 모듈파일 업로드 버튼 만들기 */}
        <SettingItem
          title={t("themeContent.themes.custom.upload")}
          isLastItem={true}
          onClick={() => alert("upload custom theme")}
        />
      </div>
    </div>
  );
}
