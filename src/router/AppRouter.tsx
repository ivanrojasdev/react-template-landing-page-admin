import AdminLayout from '@/layouts/admin/AdminLayout';
import AuthLayout from '@/layouts/auth/AuthLayout';
import PublicLayout from '@/layouts/public/PublicLayout';
import { productsRoutes } from '@/modules/admin/products/router';
import { adminRoutes } from '@/modules/admin/router';
import { authRoutes } from '@/modules/auth/router';
import { publicRoutes } from '@/modules/public/router';
import NotFoundPage from '@/modules/shared/pages/NotFoundPage';
import { Route, Routes } from 'react-router';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>{publicRoutes}</Route>

      <Route path="auth" element={<AuthLayout />}>
        {authRoutes}
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        {adminRoutes}
        {productsRoutes}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
