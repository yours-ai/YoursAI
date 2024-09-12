import ThemeSelect from "@/components/FriendsTab/ThemeSelect";
import { useTheme } from "@/hooks/useTheme.ts";

export default function FriendsTab() {
  const theme = useTheme();
  if (!theme) return null;
  const {
    id: currentThemeId,
    name,
    description,
    components: { Button },
  } = theme;
  return (
    <>
      <div>
        <ThemeSelect currentThemeId={currentThemeId} />
      </div>
      <p>{description}</p>
      <Button>{name}</Button>
    </>
  );
}
