import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: UserData | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutUserStart: (state) => {
      state.isLoading = true;
    },
    userAdded: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  userAdded,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;
