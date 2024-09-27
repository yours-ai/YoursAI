import React, { useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import { PiCloudArrowDown } from "react-icons/pi";
import { Trans, useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import DataOption from "@/routes/setup/sheets/DataOption.tsx";
import Tooltip from "@/components/macos/Tooltip.tsx";
import AllDefaultStartModal from "@/routes/setup/sheets/AllDefaultStartModal.tsx";

export interface Props {
  goToLastStep: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

type DataOptions = "default" | "local" | "cloud";

export default function DataSheet({ setStep, goToLastStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [selectedOption, setSelectedOption] = useState<DataOptions>("default");
  const handleOptionClick = (option: DataOptions) => {
    setSelectedOption(option);
  };
  const [allDefaultStartModalOpen, setAllDefaultStartModalOpen] =
    useState(false);

  return (
    <Sheet
      extra={
        allDefaultStartModalOpen && (
          <AllDefaultStartModal
            onClose={() => setAllDefaultStartModalOpen(false)}
            onYes={goToLastStep}
          />
        )
      }
      content={
        <>
          <SettingTitle
            icon={<PiCloudArrowDown />}
            title={t("dataContent.title")}
          />
          <div className="mt-[83px] flex flex-col gap-[17px]">
            <DataOption
              isSelected={selectedOption === "default"}
              option={t("dataContent.options.default")}
              onClick={() => handleOptionClick("default")}
            />
            <DataOption
              isSelected={selectedOption === "local"}
              option={t("dataContent.options.local")}
              onClick={() => handleOptionClick("local")}
            />
            <Tooltip
              content={t("dataContent.options.noSupport")}
              place="bottom-start"
            >
              <DataOption
                isSelected={selectedOption === "cloud"}
                isDisabled
                option={t("dataContent.options.cloud")}
              />
            </Tooltip>
          </div>
          <div className="text-16p phone:text-18p tablet:text-20p tablet:text-white absolute top-[521px] px-[20px] text-center font-semibold leading-[25px]">
            <Trans i18nKey="dataContent.description" t={t}>
              채팅 내역, 설정 등 모든 데이터는<br></br>언제든지 파일로 백업하고
              되돌릴 수 있습니다.
            </Trans>
          </div>
        </>
      }
      leftActions={
        <div
          className="text-13p text-accentBlue cursor-pointer px-[7px] leading-[16px]"
          onClick={() => setAllDefaultStartModalOpen(true)}
        >
          {t("sheet.startWithDefault")}
        </div>
      }
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
    />
  );
}
