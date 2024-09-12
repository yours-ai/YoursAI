import { PiCaretRightBold } from "react-icons/pi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface GroupedListRow {
  label: string | ReactNode;
  link?: string;
  content?: string | ReactNode;
  isFirst: boolean;
}

interface GroupedList {
  rows: GroupedListRow[];
}

const GroupedListRow = ({ label, link, content, isFirst }: GroupedListRow) => {
  if (link) {
    return (
      <Link to={link}>
        <div
          className={`relative flex items-center justify-between ${!isFirst ? "border-t-[0.5px] border-border" : ""}  py-[11px] pr-[16px]`}
        >
          <span className="text-16p leading-[22px]">{label}</span>
          <div className="absolute right-[16px] flex items-center">
            {content === "caret" ? (
              <PiCaretRightBold className="text-18p text-black/50" />
            ) : (
              content
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-between ${!isFirst ? "border-t-[0.5px] border-border" : ""}  py-[11px] pr-[16px]`}
    >
      <span className="text-16p leading-[22px]">{label}</span>
      <div className="absolute right-[16px] flex items-center">
        {content === "caret" ? (
          <PiCaretRightBold className="text-18p text-black/50" />
        ) : (
          content
        )}
      </div>
    </div>
  );
};

function GroupedList({ rows }: GroupedList) {
  return (
    <div className="flex w-full flex-col rounded-[10px] bg-white pl-[16px]">
      {rows.map((row: GroupedListRow, index) => (
        <GroupedListRow
          label={row.label}
          content={row.content}
          link={row.link}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

export default GroupedList;
