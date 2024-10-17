import { format, DateArg } from "date-fns";
import { FormatOptions } from "date-fns/format";
import { enUS, ko } from "date-fns/locale";
import { useCurrentLanguage } from "@/locales/hooks.ts";

export const useFormatAutoLocale = () => {
  const language = useCurrentLanguage();
  return (
    date: DateArg<Date> & {},
    formatStr: string,
    options?: FormatOptions,
  ) => {
    return format(date, formatStr, {
      locale: language === "ko" ? ko : enUS,
      ...options,
    });
  };
};
