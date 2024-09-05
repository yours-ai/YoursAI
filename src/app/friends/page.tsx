"use client";
import { useTheme } from "@/hooks/useTheme";
import { useGlobalConfig } from "@/reducers/globalConfig/context";
import { AvailableBundledThemes, BundledThemes } from "@/themes/models";

export default function FriendsPage() {
  const {
    name,
    description,
    components: { Button },
  } = useTheme();

  const [config, dispatch] = useGlobalConfig();
  return (
    <>
      <div>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(event) => {
            dispatch({
              type: "SET_THEME",
              to: {
                type: "bundled",
                name: event.target.value as AvailableBundledThemes,
              },
            });
          }}
        >
          {Object.entries(BundledThemes).map(([id, theme]) => (
            <option
              key={id}
              value={id}
              selected={
                config.theme.type === "bundled" && config.theme.name === id
              }
            >
              {theme.name}
            </option>
          ))}
        </select>
      </div>
      <p>{description}</p>
      <Button>{name}</Button>
    </>
  );
}
