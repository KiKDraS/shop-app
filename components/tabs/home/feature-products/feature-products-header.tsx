import { Button } from "@/components/ui";
import { tabs } from "@/constants";
import { spacing } from "@/constants/theme/spacing";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function FeatureProductsHeader() {
  const { textStyles } = useTheme();
  const router = useRouter();

  const handleViewAll = () => {
    router.push(tabs.search.href);
  };

  return (
    <View style={[styles.sectionHeader, { marginBottom: spacing.md }]}>
      <Text style={[textStyles.sectionTitle, { marginBottom: 0 }]}>
        Featured Products
      </Text>
      <Button
        text="View All"
        textSize={12}
        variant="ghost"
        onPress={handleViewAll}
      />
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
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
});
