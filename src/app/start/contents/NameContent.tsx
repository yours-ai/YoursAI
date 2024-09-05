import React from "react";
import SettingTitle from "@/components/SettingTitle";

function NameContent() {
  return (
    <>
      <SettingTitle
        title={
          <p>
            설정이 모두 끝났어요!
            <br />
            마지막으로, 어떻게 불러드릴까요?
          </p>
        }
      />
      <div className="mt-[56px] flex w-[263px] flex-col gap-[21px] text-13p leading-[16px]">
        <div className="relative flex w-full gap-[22px]">
          <input
            type="text"
            className="w-[50%] rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
            placeholder="성"
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <input
            type="text"
            className="w-[50%] rounded-[5px] px-[7px] py-[3px] outline-0 placeholder:text-black/25"
            placeholder="이름"
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <div className="absolute bottom-[3px] left-[-46px] text-13p leading-[16px]">
            이름:
          </div>
        </div>
        <div className="relative">
          <textarea
            placeholder="캐릭터가 당신에 대해 알았으면 하는 것"
            rows={10}
            className="w-full resize-none rounded-[5px] px-[7px] py-[5px] outline-0 placeholder:text-black/25"
            style={{
              boxShadow:
                "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
            }}
          />
          <div className="absolute left-[-78px] top-[3px] text-13p leading-[16px]">
            소개(선택):
          </div>
        </div>
      </div>
    </>
  );
}

export default NameContent;
