import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import TabTitle from "@/components/TabTitle.tsx";
import TabAction from "@/components/TabAction.tsx";
import { List, ListItem } from "konsta/react";
import NavLinkListItem from "@/components/NavLinkListItem.tsx";

export function Component() {
  useLeftPrimaryPage("/main/settings");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div className="h-full bg-emptyBackground">
          <TabAction action="none" />
          <TabTitle title="설정" />
          <div className="mt-[12px] flex flex-col gap-[36px] px-8">
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem link="language" title="언어" after="한국어" />
              <NavLinkListItem
                link="themes"
                title="테마"
                after='"그" 과일 테마'
                isLast
              />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem
                link="conversation"
                title="대화 설정"
                after="소설형"
                isLast
              />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem link="data" title="데이터 관리" isLast />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <ListItem title="Github: 개발자 괴롭히기, 소스코드 구경" link />
              <ListItem title="디스코드 커뮤니티 서버" link />
              <ListItem title="이메일" link />
              <NavLinkListItem link="sponsor" title="후원" isLast />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <ListItem
                title={<p className="text-red">모든 데이터 삭제 및 초기화</p>}
                link
              />
            </List>
          </div>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "SettingsPage";
