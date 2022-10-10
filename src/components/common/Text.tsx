import styled from 'styled-components';

interface Props {
  fontSize?: string;
}

export const Text = styled.span<Props>`
  font-size: ${(props) => props.fontSize || props.theme.defaultFontSize};
`;
