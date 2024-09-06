"use client";

import { AvailableBundledThemes, BundledThemes } from "@/themes/models";
import { useDispatch } from "react-redux";
import { setTheme } from "@/lib/features/globalConfig/globalConfigSlice";

export interface Props {
  currentThemeId: string;
}

export default function ThemeSelect({ currentThemeId }: Props) {
  const dispatch = useDispatch();
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={currentThemeId}
      onChange={(event) => {
        dispatch(
          setTheme({
            type: "bundled",
            id: event.target.value as AvailableBundledThemes,
          }),
        );
      }}
    >
      {Object.entries(BundledThemes).map(([id, theme]) => (
        <option key={id} value={id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
}
