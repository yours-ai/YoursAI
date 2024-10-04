import { Toggle } from "konsta/react";
import { useEffect, useRef, useState } from "react";

export default function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const newLineCount = value.split("\n").length;
      if (newLineCount < 4) {
        textareaRef.current.style.height = `${40 + (newLineCount - 1) * 22}px`;
      }
    }
  }, [value]);

  return (
    <div
      className={`sticky bottom-0 z-50 flex h-[120px] w-full flex-row justify-stretch gap-3 bg-white px-3 pb-[30px] pt-[5px]`}
    >
      <div className={`flex shrink flex-col items-center justify-start `}>
        <div className={`text-[14px] font-normal text-[#535C62]`}>
          탈옥 토글
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
        className={`h-[40px] grow resize-none rounded-2xl border border-[#F0F0F0] bg-[#F8F8F8] px-3 pt-2 text-16p font-medium text-black focus:outline-none`}
        rows={1}
      />
    </div>
  );
}
