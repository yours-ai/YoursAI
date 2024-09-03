import React, { useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import { PiCloudArrowDown } from "react-icons/pi";

interface Props {
  isSelected: boolean;
  option: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const selectedOptionStyle = {
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.00) 100%), #007AFF",
  boxShadow:
    "0px 1px 2.5px 0px rgba(0, 122, 255, 0.24), 0px 0px 0px 0.5px rgba(0, 122, 255, 0.12)",
};

const nonSelectedOptionStyle = {
  border: "0.5px solid rgba(0, 0, 0, 0.15)",
  backgroundColor: "white",
  boxShadow:
    "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.10), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.10)",
};

const disabledSelectedOptionStyle = {
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  boxShadow:
    "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
};

type DataOptions = "default" | "local" | "cloud";

const DataOption = ({ isSelected, option, isDisabled, onClick }: Props) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-[6px]"
      onClick={onClick}
    >
      <div
        className="size-[14px] rounded-full"
        style={
          isSelected
            ? selectedOptionStyle
            : isDisabled
              ? disabledSelectedOptionStyle
              : nonSelectedOptionStyle
        }
      ></div>
      <div className="text-13p leading-[16px]">{option}</div>
    </div>
  );
};

function DataContent() {
  const [selectedOption, setSelectedOption] = useState<DataOptions>("default");
  const handleOptionClick = (option: DataOptions) => {
    setSelectedOption(option);
  };
  return (
    <>
      <SettingTitle
        icon={<PiCloudArrowDown />}
        title="불러올 데이터가 있나요?"
      />
      <div className="mt-[83px] flex flex-col gap-[17px]">
        <DataOption
          isSelected={selectedOption === "default"}
          option="아니요, 처음부터 설정할게요"
          onClick={() => handleOptionClick("default")}
        />
        <DataOption
          isSelected={selectedOption === "local"}
          option="네, 로컬에서 불러올게요"
          onClick={() => handleOptionClick("local")}
        />
        <DataOption
          isSelected={selectedOption === "cloud"}
          isDisabled
          option="네, 클라우드에서 불러올게요"
        />
      </div>
    </>
  );
}

export default DataContent;
