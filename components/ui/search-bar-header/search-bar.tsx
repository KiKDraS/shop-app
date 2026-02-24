import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { IconSymbol } from "../icon-symbol";

export function SearchBar() {
  const { colors, textStyles, borderRadius } = useTheme();

  return (
    <View
      style={[
        styles.searchContainer,
        {
          backgroundColor: colors.surface,
          borderRadius: borderRadius.md,
        },
      ]}
    >
      <IconSymbol
        name="magnifyingglass"
        size={20}
        color={colors.textSecondary}
      />
      <TextInput
        style={[
          styles.searchInput,
          textStyles.bodyRegular,
          { color: colors.textPrimary },
        ]}
        placeholder="Search products..."
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    marginRight: spacing.md,
    height: 44,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    marginLeft: spacing.sm,
  },
});
