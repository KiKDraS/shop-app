import { borderRadius } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { Button } from "../button";

interface Props extends TouchableOpacityProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export function FavoriteButton({
  isFavorite,
  onToggle,
  style,
}: Readonly<Props>) {
  const { colors } = useTheme();

  return (
    <Button
      onPress={onToggle}
      variant="outline"
      icon={isFavorite ? "heart.fill" : "heart"}
      style={[styles.button, { backgroundColor: colors.background }, style]}
      iconColor={isFavorite ? colors.danger : colors.textSecondary}
      iconSize={16}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.xxl,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
