"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useRef } from "react";
import { AppStore } from "./store";
import { CapsuleState } from "./capsuleSlice";

export default function StoreProvider({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState?: { capsules: CapsuleState };
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // create the store instance with preloaded data
    storeRef.current = makeStore(preloadedState);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
