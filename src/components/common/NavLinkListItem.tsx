import React from "react";
import { ListItem } from "konsta/react";
import { NavLink } from "react-router-dom";

export interface Props {
  title: string | React.ReactNode;
  link: string;
  after?: string | React.ReactNode;
  isLast?: boolean;
}

export default function NavLinkListItem({ title, link, after, isLast }: Props) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "is-active" : "")}
    >
      {({ isActive }) => (
        <ListItem
          link
          title={title}
          after={after}
          className={`${isLast ? "hairline-b-none" : ""} ${isActive ? "bg-accentBlue" : ""}`}
          colors={{
            primaryTextIos: isActive ? "text-white" : "",
            secondaryTextIos: isActive ? "text-white/55" : "text-[#3C3C43]/60",
          }}
        />
      )}
    </NavLink>
  );
}
