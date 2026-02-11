import { borderRadius, spacing } from "./spacing";
import { createTextStyles, typography } from "./typography";

export interface ThemeColors {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  danger: string;
  success: string;
  successLight: string;
  warning: string;
  border: string;
}
export type ColorName = keyof ThemeColors;

export type Spacing = typeof spacing;
export type SpacingSize = keyof Spacing;

export type BorderRadius = typeof borderRadius;
export type BorderRadiusSize = keyof BorderRadius;

export type Typography = typeof typography;
export type FontSize = keyof Typography["size"];
export type TextStyles = ReturnType<typeof createTextStyles>;

export interface ColorPalette {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface Theme {
  colors: ColorPalette;
  spacing: Spacing;
  borderRadius: BorderRadius;
  typography: Typography;
  textStyles: TextStyles;
}
