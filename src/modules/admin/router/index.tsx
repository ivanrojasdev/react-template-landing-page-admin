import { dashboardRoutes } from '../dashboard/router';
import { productsRoutes } from '../products/router';

export const adminRoutes = (
  <>
    {dashboardRoutes}
    {productsRoutes}
  </>
);
