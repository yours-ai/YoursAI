import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import Tooltip from "@/components/macos/Tooltip.tsx";

export default function AreYouThereBubble({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation("pages/setup");
  const [isPrompt, setIsPrompt] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  return (
    <Tooltip
      isOpen
      opacity={0.6}
      size="lg"
      place="bottom"
      content={
        <>
          <div className={`${isPrompt ? "text-red-500 italic" : ""}`}>
            {!animationComplete ? (
              <TypeAnimation
                sequence={[
                  t("setupStart.bubble.systemPrompt"),
                  1000,
                  () => {
                    setIsPrompt(true);
                    setAnimationComplete(true);
                  },
                ]}
                wrapper="span"
                cursor={false}
                className="leading-[30px]"
              />
            ) : (
              <span className="leading-[30px]">
                {t("setupStart.bubble.systemPromptItalics")}
              </span>
            )}
          </div>
          {isPrompt ? (
            <TypeAnimation
              sequence={[t("setupStart.bubble.conversation"), 1000, () => {}]}
              wrapper="span"
              cursor={false}
              className="leading-[30px]"
              style={{ display: "inline-block", textAlign: "center" }}
            />
          ) : null}
        </>
      }
    >
      {children}
    </Tooltip>
  );
}
