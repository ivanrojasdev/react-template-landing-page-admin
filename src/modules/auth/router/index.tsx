import { Navigate, Route } from 'react-router';
import { loginRoutes } from '../login/router';
import { registerRoutes } from '../register/router';

export const authRoutes = (
  <>
    <Route index element={<Navigate to="/auth/login" replace />} />
    {loginRoutes}
    {registerRoutes}
  </>
);
