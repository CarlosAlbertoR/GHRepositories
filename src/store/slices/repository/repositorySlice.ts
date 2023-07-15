import { createSlice } from "@reduxjs/toolkit";

import { Repository } from "../../../models";

export interface RepositoryState {
  repositories: Array<Repository>;
}

const initialState: RepositoryState = {
  repositories: [],
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setRepositories: (state, action) => {
      state.repositories = action.payload.repositories;
    },
  },
});
export const { setRepositories } = repositorySlice.actions;
