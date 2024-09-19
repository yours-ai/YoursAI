function SegmentBoard({ big }: { big?: boolean }) {
  return (
    <div
      className={`${big ? "h-[350px] w-full" : "h-[223px] w-[421px]"}  rounded-lg bg-[#D9D9D9]`}
    ></div>
  );
}

export default SegmentBoard;
