import React from "react";

export interface Props {
  icon?: React.ReactNode;
  title: string | React.ReactNode;
}

export default function SettingTitle({ icon, title }: Props) {
  return (
    <div className="mt-[38px] flex flex-col items-center gap-[15px]">
      {icon ? <div className="text-[60px] text-accentBlue">{icon}</div> : null}
      <div className="text-center text-25p font-bold leading-[30px]">
        {title}
      </div>
    </div>
  );
}
