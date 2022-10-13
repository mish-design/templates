import 'styled-components';

// расширяем дефолтные тайпинги темы
declare module 'styled-components' {
  export interface DefaultTheme {
    pageBackground: string;
    defaultFontSize: string;
  }
}
