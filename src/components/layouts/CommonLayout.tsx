import { Box } from 'src/components/common/Box';
import { Footer } from 'src/components/lib/Footer';
import { Navbar } from 'src/components/lib/Navbar';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.pageBackground};
`;

export const CommonLayout = ({ children }: Props): JSX.Element => {
  const navbarItems = [
    { id: 0, title: 'Home', href: '/' },
    { id: 1, title: 'Todo', href: '/todo' },
  ];

  return (
    <Container flexDirection='column' minHeight='100vh'>
      <Navbar items={navbarItems} />

      <Box width='100%' padding='24px' flexDirection='column' flexGrow='1'>
        {children}
      </Box>

      <Footer />
    </Container>
  );
};
