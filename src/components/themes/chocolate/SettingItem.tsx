import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
}

export default function SettingItem({ icon, title, action, onClick }: Props) {
  return (
    <div
      className={`flex w-full flex-row items-center justify-stretch border-b-[0.25px] border-[#F5F5F5] p-5`}
      onClick={onClick}
    >
      <div
        className={`${icon ? "mr-5 size-5" : null} flex shrink items-center justify-center`}
      >
        {icon}
      </div>
      <div className={`flex grow flex-row items-center justify-between`}>
        <div className={`font-medium`}>{title}</div>
        <div>{action}</div>
      </div>
    </div>
  );
}
