import { cloneElement, ReactElement, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  trigger: ReactElement<{ onClick: () => void }>;
}

export default function DropdownMenu({ children, trigger }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  const triggerProps = cloneElement(trigger, {
    onClick: toggleMenu
  });

  return (
    <>
      {triggerProps}
      <div
        className={` ${isOpen ? 'block' : 'hidden'} absolute end-0 top-12 z-50 mx-0 mr-12 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-sm md:m-0 dark:divide-gray-600 dark:bg-gray-700`}
        id="user-dropdown"
      >
        {children}
      </div>
    </>
  );
}
