import type { Theme as NativeTheme } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { colors } from "./colors";
import { borderRadius, spacing } from "./spacing";
import { Theme } from "./types";
import { createTextStyles, typography } from "./typography";

export const theme: Theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  textStyles: createTextStyles(colors.light, typography),
};

export { colors } from "./colors";
export { borderRadius, spacing } from "./spacing";
export { typography } from "./typography";

export type {
  BorderRadius,
  BorderRadiusSize,
  ColorName,
  ColorPalette,
  FontSize,
  Spacing,
  SpacingSize,
  Theme,
  ThemeColors,
  Typography,
} from "./types";

export const AppLightTheme: NativeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.light.primary,
    background: colors.light.background,
    card: colors.light.surface,
    text: colors.light.textPrimary,
    border: colors.light.border,
    notification: colors.light.danger,
  },
};

export const AppDarkTheme: NativeTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.dark.primary,
    background: colors.dark.background,
    card: colors.dark.surface,
    text: colors.dark.textPrimary,
    border: colors.dark.border,
    notification: colors.dark.danger,
  },
};
