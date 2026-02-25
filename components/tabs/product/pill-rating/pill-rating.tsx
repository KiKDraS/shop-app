import { IconSymbol } from "@/components/ui";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, View, type ViewProps } from "react-native";

interface Props extends ViewProps {
  rating: number;
}

export function PillRating({ rating, style }: Readonly<Props>) {
  const { colors, textStyles } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.surface }, style]}
    >
      <IconSymbol name="star.fill" size={14} color="#FFC107" />
      <Text
        style={[
          textStyles.smallLabel,
          {
            color: colors.textPrimary,
            marginLeft: 4,
            fontWeight: "600",
          },
        ]}
      >
        {rating}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
});
