import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

const PrivateRoute = () => {
  const { auth } = useAuth();
  const token = localStorage.getItem("token");
  if (auth === undefined) return <Loading />;
  return token ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
