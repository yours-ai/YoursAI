import { configureStore } from "@reduxjs/toolkit";
import globalConfigReducer from "@/lib/features/globalConfig/globalConfigSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      globalConfig: globalConfigReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
