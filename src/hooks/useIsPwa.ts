import { useEffect, useState } from "react";

interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

export const isPwa = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as NavigatorStandalone).standalone;

  return isStandalone || document.referrer.includes("android-app://");
};

export const useIsPwa = () => {
  const [_isPwa, setIsPwa] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    setIsPwa(isPwa());
  }, []);

  return _isPwa;
};
