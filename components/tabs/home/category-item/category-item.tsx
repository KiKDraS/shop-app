import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconSymbol, IconSymbolName } from "../../../ui/icon-symbol";

interface Props {
  title: string;
  icon: IconSymbolName;
  onPress?: () => void;
  isSelected?: boolean;
}

export function CategoryItem({
  title,
  icon,
  onPress,
  isSelected = false,
}: Readonly<Props>) {
  const { colors, textStyles, spacing } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: isSelected ? colors.primary : colors.surface,
          },
        ]}
      >
        <IconSymbol
          name={icon}
          size={28}
          color={isSelected ? colors.onPrimary : colors.primary}
        />
      </View>

      <Text
        style={[
          textStyles.smallLabel,
          {
            color: colors.textPrimary,
            marginTop: spacing.sm,
            fontWeight: isSelected ? "600" : "400",
          },
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 76,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: spacing.xxl,
    alignItems: "center",
    justifyContent: "center",
  },
});
