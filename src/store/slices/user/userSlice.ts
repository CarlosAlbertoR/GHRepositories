import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SafeUser } from "../../../models";

interface UserState {
  user: SafeUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SafeUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
