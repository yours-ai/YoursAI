import { store } from "@/redux/store.ts";
import { Provider } from "react-redux";
import DbContextProvider from "@/contexts/DbContextProvider.tsx";

export interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <DbContextProvider>
        <div className="relative font-sans">{children}</div>
      </DbContextProvider>
    </Provider>
  );
}
