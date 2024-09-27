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

export function SettingList() {
  const navigate = useNavigate();
  const matchLanguage = useMatch(`${settingPaths.language}/*`);
  const matchTheme = useMatch(`${settingPaths.themes}/*`);
  const matchChatCustomize = useMatch(`${settingPaths.chatCustomize}/*`);
  const matchData = useMatch(`${settingPaths.data}/*`);
  const matchSponsor = useMatch(`${settingPaths.sponsor}/*`);

  return (
    <div className="w-full">
      <TopTitle title="설정" />
      <div className="flex w-full flex-col justify-center pt-2">
        <SettingItem
          title={"언어"}
          icon={<MdLanguage className={`size-6`} />}
          onClick={() => navigate(settingPaths.language)}
          bgColor={matchLanguage ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={"테마"}
          icon={<CgTemplate className={`size-6`} />}
          onClick={() => navigate(settingPaths.themes)}
          bgColor={matchTheme ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={"대화 설정"}
          icon={<IoChatbubbleOutline className={`size-6`} />}
          onClick={() => navigate(settingPaths.chatCustomize)}
          bgColor={matchChatCustomize ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={"데이터 관리"}
          icon={<RiDatabase2Line className={`size-6`} />}
          onClick={() => navigate(settingPaths.data)}
          bgColor={matchData ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={"Github: 개발자 괴롭히기, 소스코드 구경"}
          icon={<IoLogoGithub className={`size-6`} />}
        />
        <SettingItem
          title={"디스코드 커뮤니티 서버"}
          icon={<RiDiscordLine className={`size-6`} />}
        />
        <SettingItem
          title={"이메일"}
          icon={<MdOutlineEmail className={`size-6`} />}
        />
        <SettingItem
          title={"후원"}
          icon={<BiDonateHeart className={`size-6`} />}
          onClick={() => navigate(settingPaths.sponsor)}
          bgColor={matchSponsor ? "bg-[#F5F5F5]" : "bg-white"}
          isLastItem={true}
        />
        <SettingItemDivider />
        <SettingItem
          title={"모든 데이터 삭제 및 초기화"}
          icon={<LuDelete className={`size-6`} />}
        />
      </div>
    </div>
  );
}
