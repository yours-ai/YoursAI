import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import { Character } from "@/routes/main/friends/page.tsx";
import { Link } from "react-router-dom";

function FriendCard({ name, image, description }: Character) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();
    if (img) {
      img.addEventListener("load", () => {
        const colors = colorThief.getPalette(img, 2);
        if (colors && colors.length >= 2) {
          const gradientStyle = `linear-gradient(to right, rgb(${colors[0].join(",")}, 0.3), rgb(${colors[1].join(",")}, 0.3))`;
          setGradient(gradientStyle);
        }
      });
    }
  }, []);

  return (
    <Link to="sena">
      <div
        className="flex w-full flex-col rounded-[8px]"
        style={{ aspectRatio: "3/4" }}
      >
        <div className="h-3/5 w-full rounded-t-[8px]">
          <img
            ref={imgRef}
            src={image}
            alt="sena"
            className="size-full rounded-t-[8px] object-cover object-center"
          />
        </div>
        <div
          className="flex h-2/5 flex-col items-center justify-center rounded-b-[8px] p-4"
          style={{ background: gradient }}
        >
          <span className="text-heading-4 font-semibold">{name}</span>
          <span className="text-center text-body text-[#5D5D5D]">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FriendCard;
