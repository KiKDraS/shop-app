import { borderRadius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, View } from "react-native";
import { POSITION_STYLES } from "./constants";
import { BadgePosition } from "./types";

export interface BadgeProps {
  count: number;
  color: string;
  position?: BadgePosition;
}

export function Badge({ count, color, position }: Readonly<BadgeProps>) {
  const { colors } = useTheme();

  if (count <= 0) return null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          borderColor: colors.background,
          ...POSITION_STYLES[position ?? "top-right"],
        },
      ]}
    >
      <Text style={styles.text}>{count > 99 ? "99+" : count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    minWidth: 18,
    height: 18,
    borderRadius: borderRadius.xxl,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xs,
    zIndex: 10,
    borderWidth: 1.5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});
