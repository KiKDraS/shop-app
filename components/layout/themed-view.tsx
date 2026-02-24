import { useThemeColor } from "@/hooks";
import { View, type ViewProps } from "react-native";

export function ThemedView({ style, ...otherProps }: Readonly<ViewProps>) {
  const backgroundColor = useThemeColor("background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
