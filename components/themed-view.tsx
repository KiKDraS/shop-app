import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export function ThemedView({ style, ...otherProps }: Readonly<ViewProps>) {
  const backgroundColor = useThemeColor("background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
