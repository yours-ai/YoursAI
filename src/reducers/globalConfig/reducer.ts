import { ImmerReducer } from "use-immer";
import { GlobalConfig } from "./states";
import { GlobalConfigAction } from "./actions";

export const globalConfigReducer: ImmerReducer<
  GlobalConfig,
  GlobalConfigAction
> = (draft, action) => {
  switch (action.type) {
    case "SET_THEME":
      draft.theme = action.to;
      return;
    default:
      return;
  }
};
