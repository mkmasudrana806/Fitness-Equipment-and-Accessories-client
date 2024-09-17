import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../types/userType";

type TProfile = {
  profile: TUser | null;
};
const initialState: TProfile = {
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // set my profile data
    loadUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loadUserProfile } = userSlice.actions;

export default userSlice.reducer;
