import { configureStore } from "@reduxjs/toolkit";
import { characterChatGenerateSlice } from "@/redux/features/characterChatGenerate/slice.ts";
import { modalSlice } from "@/redux/features/showModal/slice.ts";

export const store = configureStore({
  reducer: {
    characterChatGenerate: characterChatGenerateSlice.reducer,
    showModal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
