import { type ButtonProps } from "@/components/themes/models/Button.ts";

export default function Button({ disabled, children, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
