import Link from 'next/link';
import { memo } from 'react';
import { A } from 'src/components/common/A';

import { NavbarLink } from './types';

type NavbarItemProps = {
  item: NavbarLink;
};

export const NavbarItem = memo(function NavbarItemMemoized({ item }: NavbarItemProps): JSX.Element {
  return (
    <Link href={item.href} passHref>
      <A>{item.title}</A>
    </Link>
  );
});
