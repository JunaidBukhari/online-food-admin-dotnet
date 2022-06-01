import { memo } from 'react';
import { Navigate } from 'react-router-dom';
const AuthRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) return <Component />;
  else {
    return <Navigate to='/' />;
  }
};

export default memo(AuthRoute);
