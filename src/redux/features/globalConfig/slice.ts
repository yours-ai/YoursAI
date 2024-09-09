import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  initialGlobalConfig,
  ThemeConfig,
} from "@/redux/features/globalConfig/models.ts";

export const globalConfigSlice = createSlice({
  name: "globalConfig",
  initialState: initialGlobalConfig,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeConfig>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalConfigSlice.actions;

export default globalConfigSlice.reducer;
