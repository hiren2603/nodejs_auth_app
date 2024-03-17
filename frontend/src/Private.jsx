import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext/authContext";

function Private() {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to='/' />;
}

export default Private;
