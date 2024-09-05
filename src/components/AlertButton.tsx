import React from "react";

function AlertButton({
  isBlank = false,
  label,
  onClick,
}: {
  isBlank?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`w-[110px] px-[7px] py-[6px] ${isBlank ? "bg-blankAlert" : "bg-accentBlue bg-gradient-to-b from-[rgba(255,255,255,0.17)] to-[rgba(255,255,255,0)] text-white"} flex cursor-pointer items-center justify-center rounded-[5px] text-13p`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default AlertButton;
