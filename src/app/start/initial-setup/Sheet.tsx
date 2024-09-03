import React from "react";
import LanguageContent from "@/app/start/contents/LanguageContent";
import DataContent from "@/app/start/contents/DataContent";

function Sheet() {
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center rounded-[10px] bg-menuBackground p-[9px]">
      {/*<LanguageContent />*/}
      <DataContent />
      <div className="absolute bottom-[49px] h-px w-[calc(100%-9px-9px)] bg-black/10" />
    </div>
  );
}

export default Sheet;
