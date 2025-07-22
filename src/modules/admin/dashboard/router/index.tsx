import { Navigate, Route } from 'react-router';
import DashboardPage from '../pages/DashboardPage';

export const dashboardRoutes = (
  <>
    <Route index element={<Navigate to="/admin/dashboard" replace />} />
    <Route path="dashboard" element={<DashboardPage />} />
  </>
);
