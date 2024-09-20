import { Trans, useTranslation } from "react-i18next";

export interface Props {
  error: Error;
}

export default function ErrorText({ error }: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="w-full">
      <Trans t={t} i18nKey={"errorText.text"}>
        에러가 발생했습니다.
        <pre className="my-2 block rounded bg-gray-200 p-2 text-xs">
          {
            {
              error: String(error),
            } as unknown as React.ReactNode /* type error */
          }
        </pre>
        문제가 계속되면 디스코드에서 개발자에게 문의해주세요.
      </Trans>
    </div>
  );
}
