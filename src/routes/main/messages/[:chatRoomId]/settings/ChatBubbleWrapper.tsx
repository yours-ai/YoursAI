import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  isCharacter: boolean;
}

export default function ChatBubbleWrapper({ children, isCharacter }: Props) {
  return (
    <div
      className={`flex w-full ${!isCharacter ? "justify-end" : "justify-start"} py-[8px]`}
    >
      {children}
    </div>
  );
}
