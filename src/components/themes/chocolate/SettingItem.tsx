import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
  bgColor?: string;
}

export default function SettingItem({
  icon,
  title,
  action,
  onClick,
  bgColor = "bg-white",
}: Props) {
  return (
    <div
      className={`${bgColor} flex w-full flex-row items-center justify-stretch border-b-[0.25px] border-[#F5F5F5] px-5 py-2 transition-colors duration-100 ease-in-out`}
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
