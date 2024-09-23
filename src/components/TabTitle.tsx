function TabTitle({ title }: { title: string }) {
  return (
    <div className="py-0 pl-4 phone:py-[5.5px]">
      <span className="text-[32px] font-bold phone:text-heading-1">
        {title}
      </span>
    </div>
  );
}

export default TabTitle;
