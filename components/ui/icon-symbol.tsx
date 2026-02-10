// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app | [Web browsing](https://github.com/andrewtavis/sf-symbols-online/tree/master).
 */
const MAPPING = {
  "house.fill": "home",
  "arrow.left": "arrow-back",
  "chevron.right": "chevron-right",
  xmark: "close",
  "line.3.horizontal": "menu",
  ellipsis: "more-horiz",
  magnifyingglass: "search",
  "cart.fill": "shopping-cart",
  cart: "shopping-cart",
  "person.fill": "person",
  person: "person-outline",
  "bell.fill": "notifications",
  bell: "notifications-none",
  "heart.fill": "favorite",
  heart: "favorite-border",
  "trash.fill": "delete",
  trash: "delete-outline",
  plus: "add",
  minus: "remove",
  "square.and.arrow.up": "share",
  "star.fill": "star",
  envelope: "mail-outline",
  lock: "lock-outline",
  "eye.fill": "visibility",
  "eye.slash.fill": "visibility-off",
  tshirt: "checkroom",
  desktopcomputer: "computer",
  house: "weekend",
  "dumbbell.fill": "fitness-center",
  "camera.fill": "camera-alt",
  "gearshape.fill": "settings",
  "creditcard.fill": "credit-card",
  "box.truck.fill": "local-shipping",
  "questionmark.circle.fill": "help",
  "rectangle.portrait.and.arrow.right": "logout",
} as IconMapping;

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
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
