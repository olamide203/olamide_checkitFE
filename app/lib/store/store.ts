import { configureStore } from "@reduxjs/toolkit";
import capsuleReducer, { CapsuleState } from "@/app/lib/store/capsuleSlice";

export const makeStore = (preloadedState?: { capsules: CapsuleState }) => {
  return configureStore({
    reducer: { capsules: capsuleReducer },
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
