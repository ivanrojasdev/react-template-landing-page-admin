import DropdownItem from '@/modules/shared/components/DropdownItem';
import DropdownMenu from '@/modules/shared/components/DropdownMenu';
import { useState } from 'react';
import NavItem from './NavItem';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            <DropdownMenu
              trigger={({ toggleMenu }) => (
                <button
                  onClick={toggleMenu}
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
              )}
              menu={({ isOpen }) => (
                <div
                  className={`absolute end-0 top-13 z-50 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-sm md:top-12 dark:divide-gray-600 dark:bg-gray-700 ${isOpen ? 'block' : 'hidden'}`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <DropdownItem to="/dashboard">Admin</DropdownItem>
                    <DropdownItem to="/settings">Perfil</DropdownItem>
                    <DropdownItem to="/settings">Cerrar sesión</DropdownItem>
                  </ul>
                </div>
              )}
            />
          </div>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="/about">About</NavItem>
            </li>
            <li>
              <NavItem to="/contact">Contact</NavItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
