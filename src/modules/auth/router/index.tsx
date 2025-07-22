import { loginRoutes } from '../login/router';
import { registerRoutes } from '../register/router';

export const authRoutes = (
  <>
    {loginRoutes}
    {registerRoutes}
  </>
);
