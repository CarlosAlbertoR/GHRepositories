import { createSlice } from "@reduxjs/toolkit";

export interface LikeState {
  collectionId: string;
  likedRepositories: Array<string>;
  totalLiked: number;
}

const initialState: LikeState = {
  collectionId: "",
  likedRepositories: [],
  totalLiked: 0,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setRepositoriesLiked: (state, action) => {
      state.collectionId = action.payload.collectionId;
      state.likedRepositories = action.payload.likedRepositories;
      state.totalLiked = action.payload.likedRepositories.length;
    },
  },
});

export const { setRepositoriesLiked } = likeSlice.actions;
