import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";
import { AvailableLanguage, AvailableLanguages } from "@/locales/models.ts";
import { useCurrentLanguage, useUpdateLocale } from "@/locales/hooks.ts";
import { useMutation } from "@tanstack/react-query";

export function Component() {
  const { settingsId } = useParams();
  useRightPrimaryPage();

  const language = useCurrentLanguage();

  const updateLocale = useUpdateLocale();

  const mutation = useMutation({
    mutationFn: updateLocale,
  });

  return (
    <div className="size-full">
      <div className="flex bg-gray-200 text-3xl">
        This is setting detail page for id: {settingsId}
        <Link to="../">Back</Link>
        <select
          value={language}
          onChange={(event) =>
            mutation.mutate(event.target.value as AvailableLanguage)
          }
        >
          {AvailableLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Component.displayName = "SettingDetailPage";
