"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

function AreYouThereBubble() {
  const t = useTranslations("start/areYouThere");
  const [isPrompt, setIsPrompt] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  return (
    <div className="relative rounded-[10px] bg-[#E9E9E9]/70 px-[17px] py-[9px] text-20p">
      <div className={`${isPrompt ? "italic text-blue-800" : ""}`}>
        {!animationComplete ? (
          <TypeAnimation
            sequence={[
              t("systemPrompt"),
              1000,
              () => {
                setIsPrompt(true);
                setAnimationComplete(true);
              },
            ]}
            wrapper="span"
            cursor={false}
          />
        ) : (
          <span>{t("systemPromptItalics")}</span>
        )}
      </div>
      {isPrompt ? (
        <TypeAnimation
          sequence={[
            // "",
            // 2300,
            t("conversation"),
            1000,
            () => {
              console.log("sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
        />
      ) : null}
    </div>
  );
}

export default AreYouThereBubble;
