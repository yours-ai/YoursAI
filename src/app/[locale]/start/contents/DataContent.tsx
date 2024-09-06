import React, { useRef, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import { PiCloudArrowDown, PiQuestionBold } from "react-icons/pi";
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useTranslations } from "next-intl";

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
  backgroundColor: "white",
  boxShadow:
    "inset 0 0 0 0.5px rgba(0, 0, 0, 0.15), inset 0 1px 2px 0 rgba(0, 0, 0, 0.10), inset 0 0 2px 0 rgba(0, 0, 0, 0.10)",
};

const disabledSelectedOptionStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  boxShadow:
    "inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05)",
};

type DataOptions = "default" | "local" | "cloud";

const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, context, strategy, x, y, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(15),
      flip(),
      shift(),
      arrow({ element: arrowRef, padding: 10 }),
    ],
    whileElementsMounted: autoUpdate,
    placement: "bottom-start",
  });
  const hover = useHover(context, { delay: { open: 0, close: 0 } });
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          className={`rounded-[10px] bg-white px-[7px] py-[6px] text-13p leading-[16px]`}
          style={{
            width: "max-content",
            position: strategy,
            top: y ?? 0,
            left: x + 25 ?? 0,
            zIndex: 10,
            boxShadow:
              "0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(0, 0, 0, 0.55), 0px 0px 3px 0px rgba(255, 255, 255, 0.10)",
          }}
          {...getFloatingProps()}
        >
          {content}
          <div
            ref={arrowRef}
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              background: "white",
              transform: "rotate(45deg)",
              bottom: "75%",
              left: "15%",
              zIndex: 2,
              marginLeft: "1px",
              borderRadius: "2px",
            }}
          />
        </div>
      )}
    </>
  );
};

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
  const t = useTranslations("start/content/dataContent");
  const description = t.rich("description", {
    p: (chunk) => <p>{chunk}</p>,
    br: () => <br></br>,
  });
  const [selectedOption, setSelectedOption] = useState<DataOptions>("default");
  const handleOptionClick = (option: DataOptions) => {
    setSelectedOption(option);
  };
  return (
    <>
      <SettingTitle icon={<PiCloudArrowDown />} title={t("title")} />
      <div className="mt-[83px] flex flex-col gap-[17px]">
        <DataOption
          isSelected={selectedOption === "default"}
          option={t("options.default")}
          onClick={() => handleOptionClick("default")}
        />
        <DataOption
          isSelected={selectedOption === "local"}
          option={t("options.local")}
          onClick={() => handleOptionClick("local")}
        />
        <Tooltip content={t("options.noSupport")}>
          <DataOption
            isSelected={selectedOption === "cloud"}
            isDisabled
            option={t("options.cloud")}
          />
        </Tooltip>
      </div>
      <div className="absolute top-[521px] text-center text-20p font-bold leading-[25px] text-white">
        {description}
      </div>
    </>
  );
}

export default DataContent;
