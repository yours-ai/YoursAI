import { PiCaretLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export interface Props {
  title: string;
  enableBack?: boolean;
  enableHome?: boolean;
}

export default function SettingTopBar({
  title,
  enableBack,
  enableHome,
}: Props) {
  return (
    <div className="border-border relative flex w-full items-center justify-center border-b py-[18px]">
      {(enableBack || enableHome) && (
        <div className="text-24p text-accentBlue absolute left-[10px] cursor-pointer">
          {enableBack ? (
            <div
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
            >
              <PiCaretLeftBold />
            </div>
          ) : enableHome ? (
            <Link to="../">
              <PiCaretLeftBold />
            </Link>
          ) : null}
        </div>
      )}

      <span className="text-16p phone:text-20p font-semibold leading-[22px]">
        {title}
      </span>
    </div>
  );
}
