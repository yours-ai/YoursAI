"use client";

import React from "react";
import Sheet from "@/app/start/initial-setup/Sheet";
import LanguageContent from "@/app/start/contents/LanguageContent";
import DataContent from "@/app/start/contents/DataContent";
import useStepsStore from "@/stores/setupStepStore";

const steps = [
  <Sheet
    key={1}
    content={<LanguageContent />}
    description={
      <p>
        계속한다고 해서 무슨 약관에 동의하는 건 아닙니다.
        <br />
        어차피 모든 데이터는 로컬에만 저장됩니다.
      </p>
    }
  />,
  <Sheet
    key={2}
    content={<DataContent />}
    description={
      <p>
        채팅 내역, 설정 등 모든 데이터는
        <br />
        언제든지 파일로 백업하고 되돌릴 수 있습니다.
      </p>
    }
  />,
];

function Page() {
  const { step } = useStepsStore();
  return <>{steps[step]}</>;
}

export default Page;
