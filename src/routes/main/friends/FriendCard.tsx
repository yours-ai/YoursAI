import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import { NavLink } from "react-router-dom";
import { Character } from "@/components/themes/theFruit/friends/FriendList.tsx";

export default function FriendCard({
  name,
  image,
  description,
  slug,
}: Character) {
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
    <NavLink
      to={slug}
      className={({ isActive }) => (isActive ? "is-active" : "")}
      draggable={false}
    >
      {({ isActive }) => (
        <div
          className={`flex w-full flex-col rounded-[12px] border-[3px] ${isActive ? "border-accentBlue" : "border-transparent"}`}
          style={{ aspectRatio: "3/4" }}
        >
          <div className="h-3/5 w-full rounded-t-[8px]">
            <img
              ref={imgRef}
              src={image}
              alt="sena"
              className="size-full rounded-t-[8px] object-cover object-center"
              draggable={false}
            />
          </div>
          <div
            className="flex h-2/5 flex-col items-center justify-center overflow-hidden text-ellipsis rounded-b-[8px] p-4"
            style={{ background: gradient }}
          >
            <span className="text-heading-4 font-semibold">{name}</span>
            <span className="text-body text-center text-[#5D5D5D]">
              {description}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
}
