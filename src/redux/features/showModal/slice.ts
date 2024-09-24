import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@/redux/features/showModal/models.ts";

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalName = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
