import React from "react";
import SettingTitle from "@/components/SettingTitle";
import { useTranslations } from "next-intl";

function NameContent() {
  const t = useTranslations("start/content/nameContent");
  const title = t.rich("title", {
    p: (chunks) => <p>{chunks}</p>,
    br: () => <br></br>,
  });
  return (
    <>
      <SettingTitle title={title} />
      <div className="mt-[56px] flex w-[263px] flex-col gap-[21px] text-13p leading-[16px]">
        <div className="relative flex w-full gap-[22px]">
          <input
            type="text"
            className="w-[50%] rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
            placeholder={t("name.placeholder.first")}
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <input
            type="text"
            className="w-[50%] rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
            placeholder={t("name.placeholder.second")}
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <div className="absolute bottom-[3px] right-[280px] text-13p leading-[16px]">
            {t("name.label")}:
          </div>
        </div>
        <div className="relative">
          <textarea
            placeholder={t("intro.placeholder")}
            rows={10}
            className="w-full resize-none rounded-[5px] px-[7px] py-[5px] outline-0 placeholder:text-black/25"
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <div className="absolute right-[280px] top-[3px] text-13p leading-[16px]">
            {t("intro.label")}:
          </div>
        </div>
      </div>
    </>
  );
}

export default NameContent;
