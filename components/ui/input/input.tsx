import { ThemedView } from "@/components/layout";
import { useTheme } from "@/hooks";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Button } from "../button/button";
import { IconSymbol } from "../icon-symbol/icon-symbol";
import { IconSymbolName } from "../icon-symbol/types";
import { getInputStyles } from "./utils";

interface InputProps extends TextInputProps {
  label?: string;
  icon?: IconSymbolName;
  error?: string;
  isPassword?: boolean;
}

export function Input({
  label,
  icon,
  error,
  isPassword,
  style,
  ...props
}: Readonly<InputProps>) {
  const { colors, textStyles, borderRadius, spacing } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles = getInputStyles({
    colors,
    error,
    isFocused,
    disabled: props.editable === false,
  });

  return (
    <ThemedView
      style={[
        styles.container,
        { marginBottom: spacing.md },
        style as ViewStyle,
      ]}
    >
      {label && (
        <Text style={[textStyles.inputLabel, { color: colors.textPrimary }]}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          {
            borderRadius: borderRadius.md,
            paddingLeft: icon ? 0 : spacing.sm,
            backgroundColor: inputStyles.container.backgroundColor,
            borderColor: inputStyles.container.borderColor,
            opacity: inputStyles.container.opacity,
          },
        ]}
      >
        {icon && (
          <View style={[styles.iconContainer, { paddingLeft: spacing.sm }]}>
            <IconSymbol name={icon} size={20} color={inputStyles.icon} />
          </View>
        )}

        <TextInput
          style={[
            styles.textInput,
            textStyles.bodyRegular,
            {
              padding: spacing.md,
              paddingRight: isPassword ? 0 : spacing.md,
              color: colors.textPrimary,
            },
          ]}
          placeholderTextColor={inputStyles.placeholder}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {isPassword && (
          <View style={{ paddingRight: spacing.xs }}>
            <Button
              variant="ghost"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              icon={isPasswordVisible ? "eye.slash.fill" : "eye.fill"}
              style={{
                paddingVertical: 0,
                height: "100%",
                paddingHorizontal: spacing.sm,
              }}
            />
          </View>
        )}
      </View>

      {error && (
        <Text
          style={[
            textStyles.smallLabel,
            { color: colors.danger, marginTop: 4 },
          ]}
        >
          {error}
        </Text>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    overflow: "hidden",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: -4,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
