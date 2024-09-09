import { useTranslation } from "react-i18next";
import SetupLayout from "@/components/SetupLayout.tsx";
import AreYouThereBubble from "@/components/AreYouThereBubble.tsx";
import { Link } from "react-router-dom";
import { PiArrowRightBold } from "react-icons/pi";

export function Component() {
  const { t } = useTranslation("setup/setupPage");
  return (
    <SetupLayout>
      <div className="flex flex-col gap-[175px]">
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="heart-logo" width={180} height={180} />
          <img
            src="/logo-letters.png"
            alt="yours-ai"
            width={192}
            height={70}
            className="relative bottom-5"
          />
          <AreYouThereBubble />
        </div>
        <Link to="/setup">
          <div className="start-button flex flex-col items-center gap-[12px] text-[35px] font-bold text-white/50">
            <div className="flex size-[67px] items-center justify-center rounded-full border-4 border-white/50 duration-200">
              <PiArrowRightBold className="duration-200" />
            </div>
            <span className="text-20p leading-[20px] duration-200">
              {t("text")}
            </span>
          </div>
        </Link>
      </div>
    </SetupLayout>
  );
}

Component.displayName = "MainPage";
