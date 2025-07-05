// routes/ProtectedRoute.tsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;

