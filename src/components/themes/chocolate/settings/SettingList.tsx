import TopTitle from "@/components/themes/chocolate/TopTitle.tsx";
import { useMatch, useNavigate } from "react-router-dom";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { MdLanguage, MdOutlineEmail } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { IoChatbubbleOutline, IoLogoGithub } from "react-icons/io5";
import { RiDatabase2Line, RiDiscordLine } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { settingPaths } from "@/constants.ts";
import { useTranslation } from "react-i18next";

export function SettingList() {
  const navigate = useNavigate();
  const matchLanguage = useMatch(`${settingPaths.language}/*`);
  const matchTheme = useMatch(`${settingPaths.themes}/*`);
  const matchChatCustomize = useMatch(`${settingPaths.chatCustomize}/*`);
  const matchData = useMatch(`${settingPaths.data}/*`);
  const matchSponsor = useMatch(`${settingPaths.sponsor}/*`);

  const { t } = useTranslation("pages/settings");

  return (
    <div className="w-full">
      <TopTitle title={t("title")} />
      <div className="flex w-full flex-col justify-center pt-2">
        <SettingItem
          title={t("language.title")}
          icon={<MdLanguage className={`size-6`} />}
          onClick={() => navigate(settingPaths.language)}
          bgColor={matchLanguage ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={t("themes.title")}
          icon={<CgTemplate className={`size-6`} />}
          onClick={() => navigate(settingPaths.themes)}
          bgColor={matchTheme ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={t("conversation.title")}
          icon={<IoChatbubbleOutline className={`size-6`} />}
          onClick={() => navigate(settingPaths.chatCustomize)}
          bgColor={matchChatCustomize ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={t("data.title")}
          icon={<RiDatabase2Line className={`size-6`} />}
          onClick={() => navigate(settingPaths.data)}
          bgColor={matchData ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={t("dev")}
          icon={<IoLogoGithub className={`size-6`} />}
        />
        <SettingItem
          title={t("discord")}
          icon={<RiDiscordLine className={`size-6`} />}
        />
        <SettingItem
          title={t("email")}
          icon={<MdOutlineEmail className={`size-6`} />}
        />
        <SettingItem
          title={t("sponsor")}
          icon={<BiDonateHeart className={`size-6`} />}
          onClick={() => navigate(settingPaths.sponsor)}
          bgColor={matchSponsor ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={t("reset")}
          icon={<LuDelete className={`size-6`} />}
        />
      </div>
    </div>
  );
}
