import { type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { SafeAreaView } from "react-native-safe-area-context";

export function ThemedSafeAreaView({
  style,
  ...otherProps
}: Readonly<ViewProps>) {
  const backgroundColor = useThemeColor("background");

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor }, style]}
      {...otherProps}
    />
  );
}
