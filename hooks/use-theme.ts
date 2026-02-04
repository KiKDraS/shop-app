import { theme, Theme } from "@/constants/theme";
import { createTextStyles } from "@/constants/theme/typography";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useMemo } from "react";

export function useTheme() {
  const mode = (useColorScheme() ?? "light") as keyof Theme["colors"];
  const activeColors = theme.colors[mode];
  const textStyles = createTextStyles(activeColors, theme.typography);

  return useMemo(
    () => ({
      ...theme,
      colors: activeColors,
      textStyles,
    }),
    [activeColors, textStyles],
  );
}
