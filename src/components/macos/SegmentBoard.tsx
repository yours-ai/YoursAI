import { useImgBlob } from "@/hooks/useImgBlob.ts";

export interface Props {
  imgBlob?: Blob;
  imgSrc?: string;
  alt?: string;
}

export default function SegmentBoard({ imgBlob, imgSrc, alt }: Props) {
  const imgURL = useImgBlob(imgBlob);

  return (
    <div className="relative h-[223px] w-full max-w-[421px] overflow-hidden rounded-lg bg-[#D9D9D9]">
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
