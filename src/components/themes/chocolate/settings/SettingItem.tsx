import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  isLastItem?: boolean;
}

export default function SettingItem({
  icon,
  title,
  action,
  onClick,
  bgColor = "bg-white",
  isLastItem = false,
}: Props) {
  return (
    <div
      className={`${bgColor} ${isLastItem ? "" : "border-b-[0.25px] border-[#F5F5F5]"} flex w-full cursor-pointer flex-row items-center justify-stretch px-5 py-2 transition-colors duration-100 ease-in-out hover:bg-[#F5F5F5]`}
      onClick={onClick}
    >
      <div
        className={`${icon ? "mr-5 size-5" : null} flex shrink items-center justify-center`}
      >
        {icon}
      </div>
      <div className={`flex grow flex-row items-center justify-between`}>
        <div className={`font-normal`}>{title}</div>
        <div>{action}</div>
      </div>
    </div>
  );
}
