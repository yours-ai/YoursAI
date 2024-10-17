import { useMatch, useOutletContext } from "react-router-dom";
import { OutletContext } from "@/routes/main/SplitView.tsx";
import { useEffect } from "react";

export const useLeftPrimaryPage = (path: string) => {
  const match = useMatch(path);
  const { primary, setPrimary } = useOutletContext<OutletContext>();

  useEffect(() => {
    if (match && primary !== "left") {
      setPrimary("left");
    }
  }, [match, primary, setPrimary]);
};

export const useRightPrimaryPage = () => {
  const { setPrimary } = useOutletContext<OutletContext>();

  useEffect(() => {
    setPrimary("right");
    return () => {
      setPrimary("left");
    };
  }, [setPrimary]);
};
