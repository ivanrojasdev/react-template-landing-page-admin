import { aboutRoutes } from '../about/router';
import { contactRoutes } from '../contact/router';
import { homeRoutes } from '../home/router';

export const publicRoutes = (
  <>
    {homeRoutes}
    {contactRoutes}
    {aboutRoutes}
  </>
);
