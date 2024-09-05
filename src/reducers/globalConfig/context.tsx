"use client";

import { GlobalConfig, DefaultGlobalConfig } from "./states";
import { createContext, Dispatch, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { globalConfigReducer } from "./reducer";
import { GlobalConfigAction } from "./actions";

const GlobalConfigContext = createContext<
  [config: GlobalConfig, dispatch: Dispatch<GlobalConfigAction>] | null
>(null);

export const GlobalConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, dispatch] = useImmerReducer(
    globalConfigReducer,
    DefaultGlobalConfig,
  );

  return (
    <GlobalConfigContext.Provider value={[config, dispatch]}>
      {children}
    </GlobalConfigContext.Provider>
  );
};

export const useGlobalConfig = () => {
  const context = useContext(GlobalConfigContext);
  return context!;
};
