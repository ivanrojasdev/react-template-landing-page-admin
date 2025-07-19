import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function PublicLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-1 bg-red-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
