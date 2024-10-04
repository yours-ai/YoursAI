import { ReactNode } from "react";

interface Props {
  title: string;
  action?: ReactNode;
}

export default function TopTitle({ title, action }: Props) {
  return (
    <div className="flex w-full flex-row items-center justify-between px-5 pt-[50px]">
      <div className=" text-2xl font-bold">{title}</div>
      {action ? action : <div />}
    </div>
  );
}
