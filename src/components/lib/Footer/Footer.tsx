import { memo } from 'react';
import { Box } from 'src/components/common/Box';
import { Text } from 'src/components/common/Text';

type FooterProps = {};

export const Footer = memo(function FooterMemoized({}: FooterProps): JSX.Element {
  return (
    <Box width='100%' padding='24px'>
      <Text>Footer</Text>
    </Box>
  );
});
