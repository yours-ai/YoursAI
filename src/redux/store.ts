import { configureStore } from "@reduxjs/toolkit";
import { characterChatGenerateSlice } from "@/redux/features/characterChatGenerate/slice.ts";
import { globalModalSlice } from "@/redux/features/globalModal/slice.ts";

export const store = configureStore({
  reducer: {
    characterChatGenerate: characterChatGenerateSlice.reducer,
    globalModal: globalModalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
