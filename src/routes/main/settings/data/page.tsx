import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { Dialog, DialogButton, ListItem } from "konsta/react";
import { useState } from "react";

export function Component() {
  const [fetchDialogOpened, setFetchDialogOpened] = useState<boolean>(false);
  const [resetDialogOpened, setResetDialogOpened] = useState<boolean>(false);
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="데이터 관리" />
      <div className="flex w-full flex-col gap-[38px] px-[190px] pt-[32px]">
        <ListContainer>
          <ListItem
            title="데이터 가져오기"
            link
            onClick={() => setFetchDialogOpened(true)}
          />
          <ListItem title="데이터 내보내기" link />
        </ListContainer>
        <ListContainer>
          <ListItem
            title={<p className="text-red">모든 데이터 삭제 및 초기화</p>}
            link
            onClick={() => setResetDialogOpened(true)}
          />
        </ListContainer>
      </div>
      <Dialog
        opened={fetchDialogOpened}
        onBackdropClick={() => setFetchDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            정말 새 데이터를 가져올까요?
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            로컬 채팅 데이터가 사라질 수 있습니다.
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setFetchDialogOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={() => setFetchDialogOpened(false)}
              className="font-semibold"
            >
              네
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={resetDialogOpened}
        onBackdropClick={() => setResetDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            정말 초기화하시겠어요?
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            모든 채팅 데이터와 설정이 삭제되며,
            <br />
            되돌릴 수 없습니다.
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setResetDialogOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={() => setResetDialogOpened(false)}
              className="font-semibold text-red"
            >
              네
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "DataSettingPage";
