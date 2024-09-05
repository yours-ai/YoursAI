import { ThemeConfig } from "./states";

export interface GlobalConfigAction {
  type: "SET_THEME";
  to: ThemeConfig;
}
