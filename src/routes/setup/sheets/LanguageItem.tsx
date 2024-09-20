export interface Props {
  isSelected: boolean;
  language: string;
  onClick: () => void;
}

export default function LanguageItem({ isSelected, language, onClick }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center border-b border-black/5 py-1 text-13p ${isSelected ? "bg-accentBlue text-white" : ""} cursor-pointer duration-100`}
      onClick={onClick}
    >
      {language}
    </div>
  );
}
