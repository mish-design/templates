import { memo } from 'react';
import { Box } from 'src/components/common/Box';

import { NavbarItem } from './NavbarItem';
import { NavbarLink } from './types';

type NavbarProps = {
  items: NavbarLink[];
};

export const Navbar = memo(function NavbarMemoized({ items }: NavbarProps): JSX.Element {
  return (
    <Box width='100%' padding='24px' gap='24px'>
      {items.map((item) => (
        <Box key={item.id}>
          <NavbarItem item={item} />
        </Box>
      ))}
    </Box>
  );
});
