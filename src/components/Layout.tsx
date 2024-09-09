export interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <main className="relative font-sans">{children}</main>;
}
