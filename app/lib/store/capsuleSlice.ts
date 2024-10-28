import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Capsule } from "@/app/lib/data";

export type FilterField = "status" | "original_launch" | "type";

export interface CapsuleState {
  items: Capsule[];
  filterField: FilterField;
  status: "idle" | "loading" | "failed";
  nextID: number;
  pageIndex: number;
}

const initialState: CapsuleState = {
  items: [],
  filterField: "status",
  status: "idle",
  nextID: 220,
  pageIndex: 0,
};

export const capsuleSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {
    setCapsules: (state, action: PayloadAction<Capsule[]>) => {
      state.items = action.payload;
    },
    setFilterField: (state, action: PayloadAction<FilterField>) => {
      state.filterField = action.payload;
    },
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
    },
    addCapsule: (state, action: PayloadAction<Capsule>) => {
      state.items.push(action.payload);
      state.nextID++;
    },
    updateCapsule: (state, action: PayloadAction<Capsule>) => {
      const index = state.items.findIndex(
        (capsule) => capsule.capsule_serial === action.payload.capsule_serial,
      );
      if (index != -1) {
        state.items[index] = action.payload;
      }
    },
    deleteCapsule: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (capsule) => capsule.capsule_serial !== action.payload,
      );
    },
  },
});

export const {
  setCapsules,
  setPageIndex,
  addCapsule,
  updateCapsule,
  deleteCapsule,
  setFilterField,
} = capsuleSlice.actions;

export default capsuleSlice.reducer;
