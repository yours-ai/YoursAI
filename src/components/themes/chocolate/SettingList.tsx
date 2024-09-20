import TopTitle from "@/components/themes/chocolate/TopTitle.tsx";
import { useMatch, useNavigate } from "react-router-dom";
import SettingItem from "@/components/themes/chocolate/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/SettingItemDivider.tsx";
import { MdLanguage, MdOutlineEmail } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { IoChatbubbleOutline, IoLogoGithub } from "react-icons/io5";
import { RiDatabase2Line, RiDiscordLine } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { settings } from "@/constants.ts";

export function SettingList() {
  const navigate = useNavigate();
  const matchLanguage = useMatch(`/main/settings/${settings.language.id}/*`);
  const matchTheme = useMatch(`/main/settings/${settings.theme.id}/*`);
  const matchChatSettings = useMatch(
    `/main/settings/${settings.chatSettings.id}/*`,
  );
  const matchDataManagement = useMatch(
    `/main/settings/${settings.dataManagement.id}/*`,
  );
  const matchLookupSource = useMatch(
    `/main/settings/${settings.lookupSource.id}/*`,
  );
  const matchDiscord = useMatch(`/main/settings/${settings.discord.id}/*`);
  const matchEmail = useMatch(`/main/settings/${settings.email.id}/*`);
  const matchDonation = useMatch(`/main/settings/${settings.donation.id}/*`);
  const matchDeleteAllData = useMatch(
    `/main/settings/${settings.deleteAllData.id}/*`,
  );

  return (
    <div className="w-full">
      <TopTitle title="설정" />
      <div className="flex w-full flex-col justify-center pt-2">
        <SettingItem
          title={"언어"}
          icon={<MdLanguage className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.language.id}`)}
          bgColor={matchLanguage ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={"테마"}
          icon={<CgTemplate className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.theme.id}`)}
          bgColor={matchTheme ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItemDivider />
        <SettingItem
          title={"대화 설정"}
          icon={<IoChatbubbleOutline className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.chatSettings.id}`)}
          bgColor={matchChatSettings ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItemDivider />
        <SettingItem
          title={"데이터 관리"}
          icon={<RiDatabase2Line className={`size-6`} />}
          onClick={() =>
            navigate(`/main/settings/${settings.dataManagement.id}`)
          }
          bgColor={matchDataManagement ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItemDivider />
        <SettingItem
          title={"Github: 개발자 괴롭히기, 소스코드 구경"}
          icon={<IoLogoGithub className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.lookupSource.id}`)}
          bgColor={matchLookupSource ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={"디스코드 커뮤니티 서버"}
          icon={<RiDiscordLine className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.discord.id}`)}
          bgColor={matchDiscord ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={"이메일"}
          icon={<MdOutlineEmail className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.email.id}`)}
          bgColor={matchEmail ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItem
          title={"후원"}
          icon={<BiDonateHeart className={`size-6`} />}
          onClick={() => navigate(`/main/settings/${settings.donation.id}`)}
          bgColor={matchDonation ? "bg-[#F5F5F5]" : "bg-white"}
        />
        <SettingItemDivider />
        <SettingItem
          title={"모든 데이터 삭제 및 초기화"}
          icon={<LuDelete className={`size-6`} />}
          onClick={() =>
            navigate(`/main/settings/${settings.deleteAllData.id}`)
          }
          bgColor={matchDeleteAllData ? "bg-[#F5F5F5]" : "bg-white"}
        />
      </div>
    </div>
  );
}
