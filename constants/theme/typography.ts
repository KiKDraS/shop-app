import { Platform } from "react-native";

export const typography = {
  fontFamily: "Inter-Regular",
  size: {
    title: 24,
    subtitle: 18,
    body: 14,
    caption: 12,
  },
  weight: {
    regular: 400 as const,
    medium: 500 as const,
    semiBold: 600 as const,
    bold: 700 as const,
  },
};

export const fonts = Platform.select({
  web: {
    sans: `${typography.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  default: {
    sans: typography.fontFamily,
    serif: "serif",
    rounded: "System",
    mono: "monospace",
  },
});
