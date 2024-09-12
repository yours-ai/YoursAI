import { store } from "@/redux/store.ts";
import { Provider } from "react-redux";

export interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <div className="relative font-sans">{children}</div>
    </Provider>
  );
}
