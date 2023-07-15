import { createSlice } from "@reduxjs/toolkit";
import { TopUser } from "../../../models";

export interface TopUserState {
  topUsers: Array<TopUser>;
  selectedTopUser: TopUser | null;
}

const initialState: TopUserState = {
  topUsers: [],
  selectedTopUser: null,
};

export const topUserSlice = createSlice({
  name: "topUser",
  initialState,
  reducers: {
    setTopUsers: (state, action) => {
      state.topUsers = action.payload.topUsers;
    },
    setSelectedTopUser: (state, action) => {
      state.selectedTopUser = action.payload.selectedTopUser;
    },
  },
});

export const { setTopUsers, setSelectedTopUser } = topUserSlice.actions;
