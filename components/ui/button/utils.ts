import { ButtonStyleState, ButtonVariant, VariantStyleSelector } from "./types";

export const getButtonVariantStyles = ({
  variant,
  colors,
  disabled,
}: VariantStyleSelector): ButtonStyleState => {
  if (disabled) {
    return {
      container: {
        backgroundColor: colors.border,
        borderWidth: 0,
      },
      text: {
        color: colors.textSecondary,
      },
    };
  }

  const variants: Record<ButtonVariant, ButtonStyleState> = {
    primary: {
      container: {
        backgroundColor: colors.primary,
        borderWidth: 0,
      },
      text: {
        color: colors.onPrimary,
      },
    },
    secondary: {
      container: {
        backgroundColor: colors.secondary,
        borderWidth: 0,
      },
      text: {
        color: colors.onSecondary,
      },
    },
    outline: {
      container: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.border,
      },
      text: {
        color: colors.textPrimary,
      },
    },
    ghost: {
      container: {
        backgroundColor: "transparent",
        borderWidth: 0,
      },
      text: {
        color: colors.primary,
      },
    },
    danger: {
      container: {
        backgroundColor: colors.danger + "20",
        borderWidth: 1,
        borderColor: colors.danger,
      },
      text: {
        color: colors.danger,
      },
    },
  };

  return variants[variant] || variants.primary;
};
