import { useImgBlob } from "@/hooks/useImgBlob.ts";

function ThemeButton({ selected }: { selected: boolean }) {
  return (
    <div
      className={`${selected ? "bg-[#FEE500]" : "border-2 border-menuBackground"} flex items-center justify-center rounded-full p-2`}
    >
      <div
        className={`${selected ? "size-3 bg-black" : "size-2"} flex  items-center justify-center rounded-full`}
      />
    </div>
  );
}

interface Props {
  imgBlob?: Blob;
  title?: string;
  description?: string;
  alt?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function ThemeItem({
  imgBlob,
  alt,
  title,
  description,
  selected = false,
  onClick,
}: Props) {
  const imgURL = useImgBlob(imgBlob);

  return (
    <div
      className={`flex w-full flex-row items-center justify-stretch px-5`}
      onClick={onClick}
    >
      {imgURL && (
        <img
          src={imgURL}
          alt={alt}
          className="size-40 rounded-[20px] object-cover"
        />
      )}
      <div className={`mx-5 flex grow flex-col items-start justify-center`}>
        <div className={`text-[18px]`}>{title}</div>
        <div className="text-[14px] text-[#A3A3A3]">{description}</div>
      </div>

      <ThemeButton selected={selected} />
    </div>
  );
}
