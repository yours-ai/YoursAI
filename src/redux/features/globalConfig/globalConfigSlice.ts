import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { AvailableBundledThemes } from "@/components/themes/models";

interface BundledThemeConfig {
  type: "bundled";
  id: AvailableBundledThemes;
}

interface UploadedThemeConfig {
  type: "uploaded";
  script: string;
}

export type ThemeConfig = BundledThemeConfig | UploadedThemeConfig;

export interface GlobalConfigState {
  theme: ThemeConfig;
}

const initialGlobalConfig: GlobalConfigState = {
  theme: {
    type: "bundled",
    id: "theFruit",
  },
};

export const globalConfigSlice = createSlice({
  name: "globalConfig",
  initialState: initialGlobalConfig,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeConfig>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case globalConfig function
export const { setTheme } = globalConfigSlice.actions;

export default globalConfigSlice.reducer;
