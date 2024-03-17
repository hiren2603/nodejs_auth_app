import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const login = async (user) => {
    const res = await axios.post("/api/v1/users/login", user, {
      withCredentials: true,
    });
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    setCurrentUser(res.data);
  };

  const logout = async () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    const res = await axios.post("/api/v1/users/logout", {
      withCredentials: true,
    });

    console.log(res);
  };
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
