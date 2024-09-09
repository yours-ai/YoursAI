export interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="relative font-sans">{children}</div>;
}
