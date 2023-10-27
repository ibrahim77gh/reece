import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  secondDrawer: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchSecondDrawer: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.secondDrawer = !state.secondDrawer;
    },
    openSecondDrawer: (state) => {
      state.secondDrawer = true;
    },
    closeSecondDrawer: (state, action) => {
      state.secondDrawer = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchSecondDrawer, closeSecondDrawer, openSecondDrawer } = themeSlice.actions;

export default themeSlice.reducer;
