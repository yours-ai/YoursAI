import { PiCaretLeftBold } from "react-icons/pi";

interface Props {
  title: string;
  enableBack?: boolean;
}

function SettingTopBar({ title, enableBack }: Props) {
  return (
    <div className="relative flex w-full items-center justify-center border-b border-border py-[18px]">
      {enableBack && (
        <div
          className="absolute left-[9px] cursor-pointer text-24p text-accentBlue"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <PiCaretLeftBold />
        </div>
      )}

      <span className="text-20p font-semibold leading-[22px]">{title}</span>
    </div>
  );
}

export default SettingTopBar;
