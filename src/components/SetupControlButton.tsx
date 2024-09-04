"use client";

import React, { useRef, useState } from "react";
import useSetupStepsStore from "@/stores/setupStepStore";

function SetupControlButton({
  goBack,
  start,
  upload,
  custom,
}: {
  goBack?: boolean;
  start?: boolean;
  upload?: boolean;
  custom?: string;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const { increase, decrease } = useSetupStepsStore();
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setFileName(file.name); // Set the file name in state
    }
  };
  return (
    <div className="flex flex-col items-end">
      <div
        className={`flex ${custom ? "" : "w-[60px]"} ${start ? "bg-accentBlue bg-gradient-to-b from-[rgba(255,255,255,0.17)] to-[rgba(255,255,255,0)] text-white" : "bg-white"} cursor-pointer items-center justify-center rounded-[5px]  px-[7px] py-[3px]`}
        style={{
          boxShadow:
            "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
        }}
        onClick={
          goBack
            ? decrease
            : start
              ? () => console.log("hello")
              : upload
                ? handleUploadClick
                : increase
        }
      >
        <span className="text-13p leading-[16px]">
          {goBack
            ? "뒤로"
            : start
              ? "시작하기"
              : upload
                ? "업로드"
                : custom
                  ? custom
                  : "계속하기"}
        </span>
      </div>
      {fileName && (
        <div className="relative top-[2px] text-11p leading-[16px] text-black/50">
          {fileName}
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default SetupControlButton;
