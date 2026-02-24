import { spacing } from "@/constants/theme/spacing";
import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function FeatureProductsHeader() {
  const { colors, textStyles } = useTheme();

  const handleViewAll = () => {
    console.log("Redirect to /search");
  };
  return (
    <View style={[styles.sectionHeader, { marginBottom: spacing.md }]}>
      <Text style={[textStyles.sectionTitle, { marginBottom: 0 }]}>
        Featured Products
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={handleViewAll}>
        <Text
          style={[
            textStyles.bodyRegular,
            { color: colors.primary, fontWeight: "500", fontSize: 12 },
          ]}
        >
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    marginTop: spacing.lg,
  },
});
