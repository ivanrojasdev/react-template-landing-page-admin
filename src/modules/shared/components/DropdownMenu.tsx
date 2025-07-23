import { ReactNode, useState } from 'react';

interface Props {
  trigger: (props: { toggleMenu: () => void }) => ReactNode;
  menu: (props: { isOpen: boolean }) => ReactNode;
}

export default function DropdownMenu({ trigger, menu }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {trigger({ toggleMenu })}
      {menu({ isOpen })}
    </>
  );
}
