import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CharacterCardActionPayload,
  initialCharacterCardState,
} from "@/redux/features/characterCard/models.ts";

export const characterCardSlice = createSlice({
  name: "characterCard",
  initialState: initialCharacterCardState,
  reducers: {
    setCharacterCard: (
      state,
      action: PayloadAction<CharacterCardActionPayload>,
    ) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.imageLink = action.payload.imageLink;
    },
  },
});

export const { setCharacterCard } = characterCardSlice.actions;
export default characterCardSlice.reducer;
