import { Popup as BasePopup } from "konsta/react";
import { ComponentProps } from "react";

export default function Popup({
  opened,
  className,
  ...props
}: ComponentProps<typeof BasePopup>) {
  // MARK: fix ugly top popped out position on desktop
  return (
    <BasePopup
      opened={opened}
      className={`${className} ${!opened ? "!translate-y-[200%]" : ""}`}
      {...props}
    />
  );
}
