import { ColorName, type ColorPalette, colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useMemo } from "react";

export function useThemeColor(colorName: ColorName) {
  const themeColor = (useColorScheme() ?? "light") as keyof ColorPalette;

  return useMemo(() => colors[themeColor][colorName], [colorName, themeColor]);
}
