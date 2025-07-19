import { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface Props {
  to: string;
  children: ReactNode;
}

export default function NavItem({ to, children }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block rounded-sm px-3 py-2 md:p-0 ${isActive ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'}`
      }
    >
      {children}
    </NavLink>
  );
}
