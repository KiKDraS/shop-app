// Fallback for using MaterialIcons on Android and web.

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";
import { MAPPING } from "./constants";
import { IconSymbolName } from "./types";

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: Readonly<{
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}>) {
  const icon = MAPPING[name];

  if (icon.family === "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons
        color={color}
        size={size}
        name={icon.name}
        style={style}
      />
    );
  }

  return (
    <MaterialIcons color={color} size={size} name={icon?.name} style={style} />
  );
}
