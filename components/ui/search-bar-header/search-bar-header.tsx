import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Badge } from "../badge";
import { IconSymbol } from "../icon-symbol";
import { SearchBar } from "./search-bar";

export function SearchBarHeader() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { borderBottomWidth: 1, borderBottomColor: colors.surface },
      ]}
    >
      <SearchBar />

      <View style={styles.actionsContainer}>
        {/* Notifications */}
        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <IconSymbol name="bell.fill" size={24} color={colors.textSecondary} />
          <Badge count={3} color={colors.danger} position="center" />
        </TouchableOpacity>

        {/* Cart */}
        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <IconSymbol name="cart.fill" size={24} color={colors.textSecondary} />
          <Badge count={2} color={colors.primary} position="center" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  iconButton: {
    position: "relative",
    padding: 4,
  },
});
