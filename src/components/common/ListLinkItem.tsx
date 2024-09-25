import React from "react";
import { ListItem } from "konsta/react";
import { Link } from "react-router-dom";

export interface Props {
  title: string | React.ReactNode;
  link: string;
  after?: string | React.ReactNode;
  isLast?: boolean;
}

export default function ListLinkItem({ title, link, after, isLast }: Props) {
  return (
    <Link to={link}>
      <ListItem
        link
        title={title}
        after={after}
        className={`${isLast ? "hairline-b-none" : ""}`}
      ></ListItem>
    </Link>
  );
}
