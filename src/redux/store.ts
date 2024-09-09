import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalConfigReducer from "@/redux/features/globalConfig/globalConfigSlice.ts";
import storage from "redux-persist-indexeddb-storage"; // defaults to localStorage for web
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const rootReducer = combineReducers({
  globalConfig: globalConfigReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage: storage("root"),
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
