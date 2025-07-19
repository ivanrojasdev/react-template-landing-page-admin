import { Route } from 'react-router';
import ProductsPage from '../pages/ProductsPage';

export const productsRoutes = (
  <>
    <Route path="products" element={<ProductsPage />} />
  </>
);
