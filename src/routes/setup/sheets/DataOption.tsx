export interface Props {
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

export default function DataOption({
  isSelected,
  option,
  isDisabled,
  onClick,
}: Props) {
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
}
