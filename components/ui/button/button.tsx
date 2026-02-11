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
  title?: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: IconSymbolName;
}

export function Button({
  title,
  variant = "primary",
  isLoading,
  icon,
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
          paddingVertical: spacing.md,
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
              size={20}
              color={contentColor}
              style={{ marginRight: title ? 8 : 0 }}
            />
          )}
          {title && (
            <Text style={[textStyles.buttonText, variantStyles.text]}>
              {title}
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
