import { InputStyleSelector, InputStyleState } from "./types";

export const getInputStyles = ({
  colors,
  error,
  isFocused,
  disabled,
}: InputStyleSelector): InputStyleState => {
  if (disabled) {
    return {
      container: {
        borderColor: colors.border,
        backgroundColor: colors.surface,
        opacity: 0.5,
      },
      text: { color: colors.textSecondary },
      placeholder: colors.textSecondary,
      icon: colors.textSecondary,
    };
  }

  if (error) {
    return {
      container: {
        borderColor: colors.danger,
        backgroundColor: colors.surface,
      },
      text: { color: colors.danger },
      placeholder: colors.textSecondary,
      icon: colors.danger,
    };
  }

  if (isFocused) {
    return {
      container: {
        borderColor: colors.primary,
        backgroundColor: colors.surface,
      },
      text: { color: colors.textPrimary },
      placeholder: colors.textSecondary,
      icon: colors.primary,
    };
  }

  return {
    container: {
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    text: { color: colors.textPrimary },
    placeholder: colors.textSecondary,
    icon: colors.textSecondary,
  };
};
