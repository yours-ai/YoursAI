// import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialCharacterChatState } from "./models.ts";

export const characterChatGenerateSlice = createSlice({
  name: "characterChatGenerate",
  initialState: initialCharacterChatState,
  reducers: {},
});

// export const {} = characterChatGenerateSlice.actions;

export default characterChatGenerateSlice.reducer;
