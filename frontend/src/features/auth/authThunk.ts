import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RagisterType } from "../../types";

export const login = createAsyncThunk(
  "auth/loginUser",
  async (user: { username: string; password: string }) => {
    return axios
      .post(`/api/v1/users/login`, user)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
);

export const ragister = createAsyncThunk(
  "auth/ragisterUser",
  async (values: RagisterType) => {
    return axios
      .post(`/api/v1/users/ragister`, values)
      .then((response) => response.data)
      .catch((error) => {
        return error.response.data;
      });
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return axios
    .post(`/api/v1/users/logout`)
    .then((response) => response.data)
    .catch((error) => error.response.data);
});
