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
      if (state.isOpen && state.title && state.left && state.right) {
        state.modalStack.push({
          title: state.title,
          content: state.content,
          left: state.left,
          right: state.right,
          leftAction: state.leftAction,
          rightAction: state.rightAction,
        });
      }
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.left = action.payload.left;
      state.right = action.payload.right;
      state.leftAction = action.payload.leftAction;
      state.rightAction = action.payload.rightAction;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    resetModal: (state) => {
      state.title = null;
      state.content = null;
      state.left = null;
      state.right = null;
    },
    goBackToPreviousModal: (state) => {
      if (state.modalStack.length > 0) {
        const previousModal = state.modalStack.pop();
        if (previousModal) {
          state.isOpen = true;
          state.title = previousModal.title;
          state.content = previousModal.content;
          state.left = previousModal.left;
          state.right = previousModal.right;
          state.leftAction = previousModal.leftAction;
          state.rightAction = previousModal.rightAction;
        }
      }
    },
    enableDone: (state, action: PayloadAction<boolean>) => {
      state.isDone = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  resetModal,
  goBackToPreviousModal,
  enableDone,
} = globalModalSlice.actions;
export default globalModalSlice.reducer;
