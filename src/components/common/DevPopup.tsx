import { Fab, Link, List, ListItem, Navbar, Page } from "konsta/react";
import { PiBugBeetleFill } from "react-icons/pi";
import { useState } from "react";
import Popup from "@/contrib/konsta/Popup.tsx";
import { useTranslation } from "react-i18next";

const resetDb = async () => {
  const dbs = await window.indexedDB.databases();
  dbs.forEach((db) => {
    if (db.name) {
      void window.indexedDB.deleteDatabase(db.name);
    }
  });
  window.location.href = "/";
};

export default function DevPopup() {
  const [popupOpened, setPopupOpened] = useState(false);
  const { t } = useTranslation("common");
  return (
    <>
      <Fab
        className="fixed right-5 top-5 z-20 bg-emerald-600"
        icon={<PiBugBeetleFill />}
        onClick={() => setPopupOpened(true)}
      />
      <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
        <Page>
          <Navbar
            title={t("devPopup.title")}
            right={
              <Link navbar onClick={() => setPopupOpened(false)}>
                {t("devPopup.close")}
              </Link>
            }
          />
          <List outline strong>
            <ListItem
              title={t("devPopup.reset")}
              link
              onClick={() => confirm("really?") && resetDb()}
            />
          </List>
        </Page>
      </Popup>
    </>
  );
}
