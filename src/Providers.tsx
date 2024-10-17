import { store } from "@/redux/store.ts";
import { Provider } from "react-redux";
import DbContextProvider from "@/contexts/DbContextProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SyncLocale from "@/locales/SyncLocale.tsx";
import toast, { Toaster } from "react-hot-toast";
import ErrorText from "@/components/common/ErrorText.tsx";
import DevPopup from "@/components/common/DevPopup.tsx";
import { App } from "konsta/react";
import { PwaInstallProvider } from "@/contexts/PwaProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(error) {
        toast.error(<ErrorText error={error} />);
      },
    },
  },
});

export interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <DbContextProvider>
        <QueryClientProvider client={queryClient}>
          <PwaInstallProvider>
            <SyncLocale>
              <App style={{ minHeight: "auto" }} theme="ios">
                <div className="relative size-full font-sans">
                  {children}
                  {import.meta.env.VITE_VERCEL_ENV !== "production" && (
                    <DevPopup />
                  )}
                </div>
                <Toaster />
              </App>
            </SyncLocale>
          </PwaInstallProvider>
        </QueryClientProvider>
      </DbContextProvider>
    </Provider>
  );
}
