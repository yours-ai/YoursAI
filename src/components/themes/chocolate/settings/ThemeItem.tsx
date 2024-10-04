import { useImgBlob } from "@/hooks/useImgBlob.ts";
import CheckButton from "@/components/themes/chocolate/settings/CheckButton.tsx";

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
      className={`flex w-full flex-row items-center justify-stretch p-5`}
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

      <CheckButton selected={selected} />
    </div>
  );
}
