import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"]
};

const rootReducer = combineReducers({ 
  theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//   },
// });
