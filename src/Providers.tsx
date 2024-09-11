import { persistor, store } from "@/redux/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="relative font-sans">{children}</div>
      </PersistGate>
    </Provider>
  );
}
