import { colors } from "./colors";
import { borderRadius, spacing } from "./spacing";
import { Theme } from "./types";
import { typography } from "./typography";

export const theme: Theme = {
  colors,
  spacing,
  borderRadius,
  typography,
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
  FontWeight,
  Spacing,
  SpacingSize,
  Theme,
  ThemeColors,
  Typography,
} from "./types";
