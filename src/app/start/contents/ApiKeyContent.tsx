import React, { useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SetupForm from "@/components/SetupForm";
import { SetupContentProps } from "@/app/start/contents/ThemeContent";

function ApiKeyContent({ setBtnDisabled }: SetupContentProps) {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    if (inputValue === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [setBtnDisabled, inputValue]);

  const apiKeyFormRowList = [
    {
      rowTitle: "OpenAI API Key",
      action: (
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="rounded-[5px] bg-transparent px-[8px] py-[4px] text-13p leading-[16px] text-black outline-0 placeholder:text-black/50"
          style={{ border: "1px solid rgba(0,0,0, 0.1)" }}
          placeholder="API Key를 입력하세요"
        ></input>
      ),
    },
  ];

  return (
    <>
      <SettingTitle title="LLM API Key 입력" />
      <div className="my-[37px] text-13p leading-[16px]">
        사용하고 있는 커스텀 대화 스타일{" "}
        <span className="font-bold">아주 멋진 프롬프트 템플릿</span>이 OpenAI
        API Key를 필요로 합니다.
      </div>
      <SetupForm setupFormRows={apiKeyFormRowList} />
    </>
  );
}

export default ApiKeyContent;
