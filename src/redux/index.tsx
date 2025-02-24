// rootReducer.ts
import { Reducer, combineReducers } from "@reduxjs/toolkit";
import applicationReducer from "./applicationReducer";
import storage from "redux-persist/lib/storage";
//const persistedReducer = persistReducer(persistConfig, userReducer)
const rootReducer = combineReducers({
  applicationReducer: applicationReducer,
  // other reducers
});

const applicationRootReducer: Reducer = (
  state: RootState,
  action: { type: string }
) => {
  if (action.type === "authentication/logOutApps") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");

    state = {} as RootState;
  }
  return rootReducer(state, action);
};

export default applicationRootReducer;
export type RootState = ReturnType<typeof rootReducer>;
