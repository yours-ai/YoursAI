interface Props {
  selected: boolean;
}

export default function CheckButton({ selected }: Props) {
  return (
    <div
      className={`${selected ? "bg-[#FEE500]" : "border-2 border-menuBackground"} flex cursor-pointer items-center justify-center rounded-full p-2`}
    >
      <div
        className={`${selected ? "size-3 bg-black" : "size-2"} flex  items-center justify-center rounded-full`}
      />
    </div>
  );
}
