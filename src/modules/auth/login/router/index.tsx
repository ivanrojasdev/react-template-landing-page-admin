import { Route } from 'react-router';
import LoginPage from '../pages/LoginPage';

export const loginRoutes = (
  <>
    <Route path="login" element={<LoginPage />} />
  </>
);
