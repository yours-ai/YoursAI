import { type ButtonProps } from "@/themes/models/Button";

export default function Button({ disabled, children, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
