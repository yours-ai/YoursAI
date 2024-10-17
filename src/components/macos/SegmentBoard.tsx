import { useImgBlob } from "@/hooks/useImgBlob.ts";

export interface Props {
  imgBlob?: Blob;
  imgSrc?: string;
  alt?: string;
  flexible?: boolean;
}

export default function SegmentBoard({
  imgBlob,
  imgSrc,
  alt,
  flexible,
}: Props) {
  const imgURL = useImgBlob(imgBlob);

  return (
    <div
      className={`relative  w-full ${flexible ? "h-[350px] max-w-[900px]" : "h-[223px] max-w-[421px]"} overflow-hidden rounded-lg bg-[#D9D9D9]`}
    >
      {(imgURL || imgSrc) && (
        <img
          src={imgURL ?? imgSrc}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </div>
  );
}
