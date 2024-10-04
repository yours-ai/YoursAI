export default function TabTitle({ title }: { title: string }) {
  return (
    <div className="phone:py-[5.5px] py-0 pl-4">
      <span className="phone:text-heading-1 text-[32px] font-bold">
        {title}
      </span>
    </div>
  );
}
