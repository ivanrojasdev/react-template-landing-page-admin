import { Navigate, Route } from 'react-router';
import { dashboardRoutes } from '../dashboard/router';
import { productsRoutes } from '../products/router';

export const adminRoutes = (
  <>
    <Route index element={<Navigate to="/admin/dashboard" replace />} />
    {dashboardRoutes}
    {productsRoutes}
  </>
);
