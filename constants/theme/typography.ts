import { Platform, StyleSheet } from "react-native";
import { ThemeColors, Typography } from "./types";

export const typography = {
  fontFamily: "Inter-Regular",
  size: {
    hero: 32,
    display: 28,
    title: 24,
    subtitle: 20,
    heading: 18,
    body: 16,
    caption: 14,
    small: 12,
    tiny: 10,
  },
  lineHeight: {
    hero: 38,
    display: 32,
    title: 28,
    subtitle: 24,
    heading: 24,
    body: 24,
    caption: 20,
    small: 16,
  },
  fonts: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
    bold: "Inter-Bold",
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

export const createTextStyles = (
  colors: ThemeColors,
  typography: Typography,
) => {
  return StyleSheet.create({
    heroTitle: {
      fontFamily: typography.fonts.bold,
      fontSize: typography.size.hero,
      lineHeight: typography.lineHeight.hero,
      color: colors.textPrimary,
      textAlign: "center",
    },
    screenTitle: {
      fontFamily: typography.fonts.semiBold,
      fontSize: typography.size.subtitle,
      lineHeight: typography.lineHeight.subtitle,
      color: colors.textPrimary,
      textAlign: "center",
    },
    sectionTitle: {
      fontFamily: typography.fonts.semiBold,
      fontSize: typography.size.heading,
      lineHeight: typography.lineHeight.heading,
      color: colors.textPrimary,
      marginBottom: 12,
    },
    priceLarge: {
      fontFamily: typography.fonts.bold,
      fontSize: typography.size.display,
      color: colors.primary,
    },
    priceCard: {
      fontFamily: typography.fonts.bold,
      fontSize: typography.size.caption,
      color: colors.primary,
    },
    discountText: {
      fontFamily: typography.fonts.medium,
      fontSize: typography.size.caption,
      color: colors.danger,
      textDecorationLine: "line-through",
      marginLeft: 8,
    },
    bodyRegular: {
      fontFamily: typography.fonts.regular,
      fontSize: typography.size.body,
      lineHeight: typography.lineHeight.body,
      color: colors.textPrimary,
    },
    description: {
      fontFamily: typography.fonts.regular,
      fontSize: typography.size.caption,
      lineHeight: typography.lineHeight.caption,
      color: colors.textSecondary,
    },
    inputLabel: {
      fontFamily: typography.fonts.medium,
      fontSize: typography.size.caption,
      color: colors.textPrimary,
      marginBottom: 6,
    },
    buttonText: {
      fontFamily: typography.fonts.medium,
      fontSize: typography.size.body,
      lineHeight: typography.lineHeight.body,
      textAlign: "center",
    },
    smallLabel: {
      fontFamily: typography.fonts.regular,
      fontSize: typography.size.small,
      lineHeight: typography.lineHeight.small,
      color: colors.textSecondary,
    },
  });
};
