import styled from 'styled-components';

import { Text } from './Text';

export const A = styled(Text.withComponent('a'))`
  cursor: pointer;
`;
