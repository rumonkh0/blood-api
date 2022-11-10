import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component }) => {

  const {state, loadUser} = useContext(AuthContext);
  const { isAuthenticated, loading } = state;

  useEffect(() => {
    loadUser();
  },[]);

  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
