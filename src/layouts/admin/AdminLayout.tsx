import { useState } from 'react';
import { Outlet } from 'react-router';
import Aside from './components/Aside';
import Navbar from './components/Navbar';

export default function AdminLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <Aside isOpenSidebar={isOpenSidebar} />
      <main className="mt-14 flex-1 px-5 py-8 sm:ml-64">
        <Outlet />
      </main>
    </>
  );
}
