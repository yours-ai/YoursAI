import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";

interface Props {
  title: string;
  backLink: string;
  leftProps?: ReactNode;
  action?: ReactNode;
  bgColor?: string;
}

export default function TopBar({
  title,
  backLink,
  leftProps,
  action,
  bgColor = "bg-[#ABC1D1]/90",
}: Props) {
  return (
    <div
      className={`sticky top-0 z-50 flex h-[90px] w-full flex-row items-end justify-between ${bgColor} px-4 pb-2`}
    >
      <Link
        className={`flex grow flex-row items-center justify-start`}
        to={backLink}
      >
        <PiCaretLeft className={`size-8 text-opacity-100`} />
        {/* TODO : 아래 동적으로*/}
        <div className={`text-[18px]`}>{leftProps}</div>
      </Link>
      <div className={`text-20p font-medium text-opacity-100`}>{title}</div>
      <div className="flex grow flex-row justify-end">
        {action ? (
          <Link to={"./settings"}>{action}</Link>
        ) : (
          <div className={`w-[32px]`}>{/* empty div*/}</div>
        )}
      </div>
    </div>
  );
}
