import { ReactNode } from "react";
import { List } from "konsta/react";

function ListContainer({ children }: { children: ReactNode }) {
  return (
    <List strong inset className="!m-0 w-full max-w-[900px] bg-white" dividers>
      {children}
    </List>
  );
}

export default ListContainer;
