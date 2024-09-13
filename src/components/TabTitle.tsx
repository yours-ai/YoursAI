function TabTitle({ title }: { title: string }) {
  return (
    <div className="py-[5.5px] pl-4">
      <span className="text-heading-1 font-bold">{title}</span>
    </div>
  );
}

export default TabTitle;
