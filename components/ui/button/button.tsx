import { useTheme } from "@/hooks/use-theme";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { IconSymbol, IconSymbolName } from "../icon-symbol";
import { ButtonVariant } from "./types";
import { getButtonVariantStyles } from "./utils";

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  textSize?: number;
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: IconSymbolName;
  iconColor?: string;
  iconSize?: number;
}

export function Button({
  text,
  textSize,
  variant = "primary",
  isLoading,
  icon,
  iconColor,
  iconSize,
  style,
  ...props
}: Readonly<ButtonProps>) {
  const { colors, textStyles, borderRadius, spacing } = useTheme();
  const variantSelector = {
    disabled: !!props.disabled || !!isLoading,
    colors,
    variant,
  };
  const variantStyles = getButtonVariantStyles(variantSelector);
  const contentColor = variantStyles.text.color as string;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderRadius: borderRadius.md,
          paddingVertical: text ? spacing.md : 0,
          paddingHorizontal: text ? spacing.md : 0,
        },
        variantStyles.container,
        style,
      ]}
      disabled={isLoading || props.disabled}
      activeOpacity={0.7}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={contentColor} />
      ) : (
        <>
          {icon && (
            <IconSymbol
              name={icon}
              size={iconSize ?? 20}
              color={iconColor ?? contentColor}
              style={{ marginRight: text ? 8 : 0 }}
            />
          )}
          {text && (
            <Text
              style={[
                textStyles.buttonText,
                variantStyles.text,
                { fontSize: textSize },
              ]}
            >
              {text}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
