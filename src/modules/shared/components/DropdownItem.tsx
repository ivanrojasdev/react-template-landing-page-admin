import { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface Props {
  to: string;
  children: ReactNode;
}

export default function DropdownItem({ to, children }: Props) {
  return (
    <li>
      <NavLink
        to={to}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {children}
      </NavLink>
    </li>
  );
}
