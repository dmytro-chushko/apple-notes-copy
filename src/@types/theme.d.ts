import 'styled-components';
import { ITheme } from '../styles/theme.styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
