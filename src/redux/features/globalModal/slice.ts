import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  initialState,
  GlobalModalActionPayload,
} from "@/redux/features/globalModal/models.ts";

export const globalModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<GlobalModalActionPayload>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.left = action.payload.left;
      state.right = action.payload.right;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = null;
      state.content = null;
      state.left = null;
      state.right = null;
    },
  },
});

export const { openModal, closeModal } = globalModalSlice.actions;
export default globalModalSlice.reducer;
