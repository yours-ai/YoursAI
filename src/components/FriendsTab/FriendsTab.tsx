import { Theme } from "@/themes/models";
import ThemeSelect from "@/components/FriendsTab/ThemeSelect";

export interface Props {
  theme: Theme;
}

export default function FriendsTab({
  theme: {
    id: currentThemeId,
    name,
    description,
    components: { Button },
  },
}: Props) {
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
