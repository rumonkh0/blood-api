import React,{ useContext} from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../../components/layout/Spinner';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component }) => {
  const [state] = useContext(AuthContext);
  const { isAuthenticated, loading } = state;
  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to='/login' />;
};

export default PrivateRoute;