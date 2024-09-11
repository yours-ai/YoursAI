import ThemeSelect from "@/components/FriendsTab/ThemeSelect";
import { useTheme } from "@/hooks/useTheme.ts";

export default function FriendsTab() {
  const {
    id: currentThemeId,
    name,
    description,
    components: { Button },
  } = useTheme();
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
