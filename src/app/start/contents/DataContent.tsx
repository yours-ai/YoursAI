import React from "react";
import SettingTitle from "@/components/SettingTitle";
import { PiCloudArrowDown } from "react-icons/pi";

function DataContent() {
  return (
    <>
      <SettingTitle
        icon={<PiCloudArrowDown />}
        title="불러올 데이터가 있나요?"
      />
    </>
  );
}

export default DataContent;
