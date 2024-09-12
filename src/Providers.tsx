import { store } from "@/redux/store.ts";
import { Provider } from "react-redux";
import DbContextProvider from "@/contexts/DbContextProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SyncLocale from "@/locales/SyncLocale.tsx";

const queryClient = new QueryClient();

export interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <DbContextProvider>
        <QueryClientProvider client={queryClient}>
          <SyncLocale>
            <div className="relative font-sans">{children}</div>
          </SyncLocale>
        </QueryClientProvider>
      </DbContextProvider>
    </Provider>
  );
}
