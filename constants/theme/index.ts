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
