import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import { Trans, useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { Dispatch, SetStateAction } from "react";
import { GlobalConfig, personaSchema } from "@/domain/config/models.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCurrentLanguage } from "@/locales/hooks.ts";

export interface Props {
  config: GlobalConfig;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function PersonaSheet({ setStep, config }: Props) {
  const { t } = useTranslation("pages/setup");
  const { register, handleSubmit } = useForm({
    defaultValues: config.conversationConfig.persona,
    resolver: zodResolver(personaSchema),
  });
  const navigate = useNavigate();
  const db = useDb();
  const mutation = useMutation({
    mutationFn: async (values: Zod.infer<typeof personaSchema>) => {
      const repo = makeGlobalConfigRepository(db);
      await repo.updateGlobalConversationConfig({
        persona: values,
      });
      await repo.updateGlobalConfig({
        hasDoneSetup: true,
      });
    },
    onSuccess() {
      navigate("/main");
    },
  });
  const currentLanguage = useCurrentLanguage();

  const firstNameInput = (
    <input
      type="text"
      className="w-1/2 rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
      placeholder={t("nameContent.name.placeholder.firstName")}
      style={{
        boxShadow:
          "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
      }}
      {...register("firstName")}
    />
  );
  const lastNameInput = (
    <input
      type="text"
      className="w-1/2 rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
      placeholder={t("nameContent.name.placeholder.lastName")}
      style={{
        boxShadow:
          "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
      }}
      {...register("lastName")}
    />
  );

  return (
    <Sheet
      content={
        <>
          <SettingTitle
            title={
              <Trans i18nKey="nameContent.title" t={t}>
                설정이 모두 끝났어요!<br></br>마지막으로, 어떻게 불러드릴까요?
              </Trans>
            }
          />
          <div className="text-13p mt-[56px] flex w-[263px] flex-col gap-[21px] overflow-visible leading-[16px]">
            <div className="phone:flex-row phone:gap-0 relative flex w-full flex-col gap-[10px]">
              <div
                className="text-13p phone:block absolute bottom-[3px] right-0 hidden leading-[16px]"
                style={{
                  transform: "translateX(-280px)",
                  whiteSpace: "nowrap",
                }}
              >
                {t("nameContent.name.label")}:
              </div>
              <div className="text-13p phone:hidden leading-[16px]">
                {t("nameContent.name.label")}:
              </div>
              {currentLanguage === "ko" ? (
                <div className="flex gap-[22px]">
                  {lastNameInput}
                  {firstNameInput}
                </div>
              ) : (
                <div className="flex gap-[22px]">
                  {firstNameInput}
                  {lastNameInput}
                </div>
              )}
            </div>
            <div className="phone:flex-row phone:gap-0 relative flex flex-col gap-[10px]">
              <div
                className="text-13p phone:block absolute right-0 top-[3px] hidden leading-[16px]"
                style={{
                  transform: "translateX(-280px)",
                  whiteSpace: "nowrap",
                }}
              >
                {t("nameContent.intro.label")}:
              </div>
              <div className="text-13p phone:hidden leading-[16px]">
                {t("nameContent.intro.label")}:
              </div>
              <textarea
                placeholder={t("nameContent.intro.placeholder")}
                rows={10}
                className="w-full resize-none rounded-[5px] px-[7px] py-[5px] outline-0 placeholder:text-black/25"
                style={{
                  boxShadow:
                    "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
                }}
                {...register("description")}
              />
            </div>
          </div>
        </>
      }
      rightActions={
        <>
          <SetupControlButton
            onClick={() => setStep((prev) => prev - 1)}
            goBack
          />
          <SetupControlButton
            start
            onClick={handleSubmit(
              (data) => {
                mutation.mutate(data);
              },
              (errors) =>
                toast.error(
                  <>
                    {Object.entries(errors)
                      .map(([field, error]) => `${field}: ${error?.message}`)
                      .filter(Boolean)
                      .map((message) => (
                        <>
                          {message}
                          <br />
                        </>
                      ))}
                  </>,
                ),
            )}
          />
        </>
      }
    />
  );
}
