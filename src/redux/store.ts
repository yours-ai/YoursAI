import { configureStore } from "@reduxjs/toolkit";
import { characterChatGenerateSlice } from "@/redux/features/characterChatGenerate/slice.ts";

export const store = configureStore({
  reducer: {
    characterChatGenerate: characterChatGenerateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
