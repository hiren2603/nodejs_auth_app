import axios from "axios";

export const login = async (user: { username: string; password: string }) => {
  const response = await axios.post(
    "http://localhost:8000/api/v1/users/login",
    user
  );
  return response;
};

export const getCountries = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/countries`
    );
    return response;
  } catch (error) {
    return error;
  }
};
