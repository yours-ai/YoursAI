import { Toggle } from "konsta/react";
import { useEffect, useRef, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";
import "./chat-input.css";
import { useTranslation } from "react-i18next";

const maxRows = 3;
const defaultHeight = 40;
const lineHeight = 22;

export default function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { t } = useTranslation("pages/msg");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    const maxHeight = 80;
    if (textareaRef.current && textareaRef.current.scrollHeight <= maxHeight) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      const newLineCount = value.split("\n").length;
      if (newLineCount <= maxRows) {
        textareaRef.current.style.height = `${defaultHeight + (newLineCount - 1) * lineHeight}px`;
      }
    }
  }, [value]);

  return (
    <div
      className={`sticky bottom-0 z-50 flex h-[120px] w-full flex-row justify-stretch gap-3 bg-white px-3 pb-[30px] pt-[5px]`}
    >
      <div
        className={`relative flex shrink flex-col items-center justify-start`}
      >
        <div className={`text-[14px] font-normal text-[#535C62]`}>
          {t("settings.jailbreak")}
        </div>
        <Toggle
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className="k-color-yellow"
        />
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        className={`scrollbar-hide h-[40px] grow resize-none rounded-2xl border border-[#F0F0F0] bg-[#F8F8F8] px-3 pr-10 pt-2 text-16p font-medium text-black focus:outline-none`}
        rows={1}
      />
      {value && (
        <PiArrowUpBold
          className={`absolute right-4 top-2 size-9 rounded-full bg-[#FFE400] p-1.5 text-black`}
        />
      )}
    </div>
  );
}
