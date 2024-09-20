import { PiArrowRightBold } from "react-icons/pi";

function NextSetupArrow({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div />
      <div
        className="mr-[10px] cursor-pointer text-black/50 hover:text-black/70"
        onClick={onClick}
      >
        <PiArrowRightBold className="text-24p " />
      </div>
    </>
  );
}

export default NextSetupArrow;
