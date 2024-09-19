import { useImgBlob } from "@/hooks/useImgBlob.ts";

export interface Props {
  img?: Blob;
  alt?: string;
}

export default function SegmentBoard({ img, alt }: Props) {
  const imgURL = useImgBlob(img);

  return (
    <div className="relative h-[223px] w-full max-w-[421px] overflow-hidden rounded-lg bg-[#D9D9D9]">
      {imgURL && (
        <img
          src={imgURL}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </div>
  );
}
