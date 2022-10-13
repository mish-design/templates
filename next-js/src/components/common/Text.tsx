import { CSSProperties } from 'react';
import styled from 'styled-components';

export enum TextVariant {
  'textHeading1' = 'textHeading1',
  'textBody1' = 'textBody1',
  'textBodyBold1' = 'textBodyBold1',
  'textButton' = 'textButton',
  'textInput' = 'textInput',
}

type Props = {
  variant?: TextVariant;
  color?: CSSProperties['color'];
  fontStyle?: CSSProperties['fontStyle'];
};

const FONT_SIZES: Record<TextVariant, string> = {
  [TextVariant.textBody1]: '16px',
  [TextVariant.textBodyBold1]: '16px',
  [TextVariant.textHeading1]: '24px',
  [TextVariant.textButton]: '12px',
  [TextVariant.textInput]: '12px',
};

const LINE_HEIGHTS: Record<TextVariant, string> = {
  [TextVariant.textBody1]: '16px',
  [TextVariant.textBodyBold1]: '16px',
  [TextVariant.textHeading1]: '24px',
  [TextVariant.textButton]: '12px',
  [TextVariant.textInput]: '12px',
};

const FONT_WEIGHTS: Record<TextVariant, string> = {
  [TextVariant.textBody1]: '400',
  [TextVariant.textBodyBold1]: '700',
  [TextVariant.textHeading1]: '700',
  [TextVariant.textButton]: '700',
  [TextVariant.textInput]: '400',
};

export const Text = styled.span<Props>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.fontStyle};
  font-size: ${({ variant = TextVariant.textBody1 }) => FONT_SIZES[variant]};
  font-weight: ${({ variant = TextVariant.textBody1 }) => FONT_WEIGHTS[variant]};
  line-height: ${({ variant = TextVariant.textBody1 }) => LINE_HEIGHTS[variant]};
`;
