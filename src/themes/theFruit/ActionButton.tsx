interface Props {
  icon: React.ReactNode;
  description: string;
  enabled: boolean;
  onClick: () => void;
}

export default function ActionButton({
  icon,
  description,
  enabled,
  onClick,
}: Props) {
  return (
    <button
      disabled={!enabled}
      className="btn flex h-[76px] w-[132px] items-center justify-center border-0 bg-buttonBg py-[10px]"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <div className="flex size-9 items-center justify-center">{icon}</div>
        <div
          className={`${enabled ? "text-white" : "text-tertiaryDark"} text-center text-[12px] font-normal`}
        >
          {description}
        </div>
      </div>
    </button>
  );
}
