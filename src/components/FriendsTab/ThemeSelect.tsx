import {
  AvailableBundledThemes,
  BundledThemes,
} from "@/components/themes/models";
import { setTheme } from "@/redux/features/globalConfig/globalConfigSlice.ts";
import { useAppDispatch } from "@/hooks/useAppStore.ts";

export interface Props {
  currentThemeId: string;
}

export default function ThemeSelect({ currentThemeId }: Props) {
  const dispatch = useAppDispatch();
  return (
    <select
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
