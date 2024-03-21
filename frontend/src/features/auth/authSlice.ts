import { createSlice } from "@reduxjs/toolkit";
import { login, ragister, logout } from "./authThunk";
export interface AuthState {
  user: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    phone: number | string;
    token: string;
    avatar: string;
  };
  loading: boolean;
  error: object | undefined;
  status: "success" | "failed" | undefined;
}

export const initialState: AuthState = {
  user: {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    token: "",
    avatar: "",
  },
  loading: false,
  error: {},
  status: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      console.log(state.user);
    },

    ragisterUser: (state, action) => {
      state.user = action.payload;
    },

    logoutUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = initialState.error;
      localStorage.setItem("currentUser", JSON.stringify(state.user));
      console.log(action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.user = initialState.user;
      state.error = action.error;
      console.log(action.error);
    });

    builder.addCase(ragister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ragister.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = initialState.error;
      console.log(action.payload);
    });
    builder.addCase(ragister.rejected, (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error;
      console.log(action.error);
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = initialState.user;
      state.error = initialState.error;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.user = initialState.user;
      state.error = action.error;
    });
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
