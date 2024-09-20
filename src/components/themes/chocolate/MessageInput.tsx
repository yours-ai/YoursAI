export default function MessageInput() {
  return (
    <div
      className={`sticky bottom-0 z-50 flex h-[84px] w-full flex-row justify-stretch gap-3 bg-white px-3 pb-[30px] pt-[5px]`}
    >
      <div className={`flex shrink flex-col items-center justify-around `}>
        <div className={`text-[14px] font-normal text-[#535C62]`}>
          탈옥 토글
        </div>
        <input
          type="checkbox"
          className="toggle border-none bg-white [--tglbg:#FEE500]"
          defaultChecked
        />
      </div>
      <input
        className={`h-[45px] grow rounded-2xl border border-[#F0F0F0] bg-[#F8F8F8] focus:outline-none`}
      />
    </div>
  );
}
