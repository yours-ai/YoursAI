interface Props {
  actionButton?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

export default function MainNavigation({
  actionButton,
  title,
  children,
  bgColor = "bg-white",
}: Props) {
  return (
    <div
      className={`h-full w-[360px] shrink flex-col justify-stretch ${bgColor} border-r pb-[58px]`}
    >
      <div className="cursor-pointer p-5 text-[17px] text-accentBlue">
        {actionButton}
      </div>
      <div className="px-5 text-[34px]/[41px] font-bold text-primaryLabel ">
        {title}
      </div>
      {children}
      <div className="fixed bottom-0 h-[58px] w-[358px] border-t">
        대충 내비게이션 자리
      </div>
    </div>
  );
}
