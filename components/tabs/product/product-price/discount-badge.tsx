import { borderRadius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  discountPercentage?: number;
}

export function DiscountBadge({ discountPercentage }: Readonly<Props>) {
  const { colors, textStyles } = useTheme();

  if (!discountPercentage || discountPercentage <= 0) return null;

  return (
    <View style={styles.badge}>
      <Text
        style={[
          textStyles.smallLabel,
          { color: colors.danger, fontWeight: "bold" },
        ]}
      >
        -{discountPercentage}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#FFE5E5",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
});
