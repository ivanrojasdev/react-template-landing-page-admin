import { Navigate, Route } from 'react-router';
import LoginPage from '../pages/LoginPage';

export const loginRoutes = (
  <>
    <Route index element={<Navigate to="/auth/login" replace />} />
    <Route path="login" element={<LoginPage />} />
  </>
);
