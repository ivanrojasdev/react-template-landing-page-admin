import { NavLink } from 'react-router';

interface Props {
  isOpenSidebar: boolean;
}

export default function Aside({ isOpenSidebar }: Props) {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20 transition-transform sm:translate-x-0 dark:border-gray-700 dark:bg-gray-800 ${isOpenSidebar ? '-translate-x-full' : ''}`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  isActive ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`
              }
            >
              <svg
                className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  isActive ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`
              }
              // className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="h-5 w-5 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap">Products</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
