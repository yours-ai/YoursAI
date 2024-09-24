import React from "react";

interface SetupFormRow {
  rowTitle: string;
  rowDescription?: string;
  action: React.ReactNode;
}

interface SetupForm {
  setupFormRows: SetupFormRow[];
  flexible?: boolean;
}

const SetupFormRow = ({ rowTitle, rowDescription, action }: SetupFormRow) => {
  return (
    <div className="flex w-full items-center justify-between py-[10px]">
      <div className="flex flex-col">
        <div className="text-13p leading-[16px]">{rowTitle}</div>
        {rowDescription && (
          <div className="text-11p leading-[14px] text-black/50">
            {rowDescription}
          </div>
        )}
      </div>
      <div className="my-[-10px]">{action}</div>
    </div>
  );
};

function SetupForm({ setupFormRows, flexible }: SetupForm) {
  return (
    <div
      className={`rounded-[6px] px-[10px] ${flexible ? "w-full" : "w-[396px]"}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.015)",
        border: "1px solid rgba(0, 0, 0, 0.04)",
      }}
    >
      {setupFormRows.map((row, index) => (
        <div key={index}>
          {index !== 0 ? (
            <div
              className="h-px w-full"
              style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            />
          ) : null}
          <SetupFormRow
            rowTitle={row.rowTitle}
            rowDescription={row.rowDescription}
            action={row.action}
          />
        </div>
      ))}
    </div>
  );
}

export default SetupForm;
