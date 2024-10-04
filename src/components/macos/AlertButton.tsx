export default function AlertButton({
  isBlank = false,
  label,
  onClick,
}: {
  isBlank?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`w-[110px] px-[7px] py-[6px] ${isBlank ? "bg-blankAlert" : "bg-accentBlue bg-gradient-to-b from-[rgba(255,255,255,0.17)] to-[rgba(255,255,255,0)] text-white"} text-13p flex cursor-pointer items-center justify-center rounded-[5px]`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
