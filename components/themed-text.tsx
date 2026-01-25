import { colors, typography } from "@/constants/theme";
import { fonts } from "@/constants/theme/typography";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, Text, type TextProps } from "react-native";

const colorMapping: Record<string, keyof typeof colors.light> = {
  default: "textPrimary",
  title: "textPrimary",
  subtitle: "textPrimary",
  caption: "textSecondary",
  link: "primary",
};

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof textStyles;
  colorType?: keyof typeof colors.light;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  colorType,
  ...rest
}: ThemedTextProps) {
  const colorKey = colorType || colorMapping[type] || "textPrimary";
  const color = useThemeColor({ light: lightColor, dark: darkColor }, colorKey);

  const typeStyle = textStyles[type] || textStyles.default;

  return <Text style={[{ color }, typeStyle, style]} {...rest} />;
}

const textStyles = StyleSheet.create({
  default: {
    fontFamily: fonts.sans,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
    lineHeight: 24,
  },
  title: {
    fontFamily: fonts.sans,
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: fonts.sans,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semiBold,
    lineHeight: 28,
  },
  caption: {
    fontFamily: fonts.sans,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.medium,
  },
  link: {
    fontFamily: fonts.sans,
    fontSize: typography.size.body,
    fontWeight: typography.weight.semiBold,
    textDecorationLine: "underline",
  },
});
