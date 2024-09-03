import React from "react";

interface Props {
  content: React.ReactNode;
  description: React.ReactNode;
}

function Sheet({ content, description }: Props) {
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center rounded-[10px] bg-menuBackground p-[9px]">
      {content}
      <div className="absolute bottom-[49px] h-px w-[calc(100%-9px-9px)] bg-black/10" />
      <div className="absolute top-[520px] text-center text-20p font-bold leading-[25px] text-white">
        {description}
      </div>
    </div>
  );
}

export default Sheet;
