import React from "react";

interface Props {
  icon?: React.ReactNode;
  title: string;
}

function SettingTitle({ icon, title }: Props) {
  return (
    <div className="mt-[38px] flex flex-col items-center gap-[15px]">
      <div className="text-[60px] text-accentBlue">{icon}</div>
      <div className="text-25p font-bold leading-[30px]">{title}</div>
    </div>
  );
}

export default SettingTitle;
