import DropdownItem from '@/modules/shared/components/DropdownItem';
import DropdownMenu from '@/modules/shared/components/DropdownMenu';
import { Dispatch } from 'react';

interface Props {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isOpenSidebar, setIsOpenSidebar }: Props) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={() => setIsOpenSidebar(!isOpenSidebar)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://flowbite.com" className="ms-2 flex md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="me-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap sm:text-2xl dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <DropdownMenu
              trigger={
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>
              }
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <DropdownItem to="/dashboard">Dashboard</DropdownItem>
                <DropdownItem to="/settings">Settings</DropdownItem>
                <DropdownItem to="/settings">Cerrar sesión</DropdownItem>
              </ul>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
