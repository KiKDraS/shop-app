import { borderRadius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  availableColors?: string[];
  selectedColor?: string;
  onSelectColor: (color: string) => void;
}

export function ColorSelector({
  availableColors,
  selectedColor,
  onSelectColor,
}: Readonly<Props>) {
  const { colors, textStyles, spacing } = useTheme();

  if (!availableColors || availableColors.length === 0) return null;

  return (
    <View>
      <Text
        style={[
          textStyles.sectionTitle,
          { color: colors.textPrimary, marginBottom: spacing.md },
        ]}
      >
        Color
      </Text>
      <View style={styles.colorContainer}>
        {availableColors.map((color) => (
          <TouchableOpacity
            key={color}
            activeOpacity={0.8}
            onPress={() => onSelectColor(color)}
            style={[
              styles.colorRing,
              {
                borderColor:
                  selectedColor === color ? colors.primary : "transparent",
              },
            ]}
          >
            <View
              style={[
                styles.colorCircle,
                {
                  backgroundColor: color,
                  borderColor: colors.border,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: "row",
    gap: spacing.md,
  },
  colorRing: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
  },
});
