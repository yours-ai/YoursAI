"use client";
import FriendsTab from "@/components/FriendsTab/FriendsTab";
import { useTheme } from "@/hooks/useTheme";

export default function FriendsPage() {
  const theme = useTheme();
  return <FriendsTab theme={theme} />;
}
