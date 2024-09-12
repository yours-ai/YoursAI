import { configureStore } from "@reduxjs/toolkit";
import globalConfigReducer from "@/redux/features/globalConfig/slice.ts";

export const store = configureStore({
  reducer: {
    globalConfig: globalConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
