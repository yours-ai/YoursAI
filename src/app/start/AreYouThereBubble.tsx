"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function AreYouThereBubble() {
  const [isPrompt, setIsPrompt] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  return (
    <div className="relative rounded-[10px] bg-[#E9E9E9]/70 px-[17px] py-[9px] text-20p">
      <div className={`${isPrompt ? "italic text-blue-800" : ""}`}>
        {!animationComplete ? (
          <TypeAnimation
            sequence={[
              "*...은 떨리는 얼굴로 말했다*",
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
          <span>...은 떨리는 얼굴로 말했다</span>
        )}
      </div>
      <TypeAnimation
        sequence={[
          "",
          2300,
          "계시나요?",
          1000,
          () => {
            console.log("sequence completed");
          },
        ]}
        wrapper="span"
        cursor={false}
      />
    </div>
  );
}

export default AreYouThereBubble;
