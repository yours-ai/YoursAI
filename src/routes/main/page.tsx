import SplitView from "./SplitView.tsx";
import { useTheme } from "@/hooks/useTheme.ts";
import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";

export function Component() {
  const match = useMatch("/main");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (match) {
      navigate("/main/friends");
    }
  }, [match, navigate]);

  if (!theme) return null;

  const {
    components: { TabNavigation },
  } = theme;
  return <SplitView leftNav={<TabNavigation />} />;
}
