import { IconMapping } from "./types";

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app | [Web browsing](https://github.com/andrewtavis/sf-symbols-online/tree/master).
 */
export const MAPPING = {
  // --- Navigation & General ---
  "house.fill": { family: "MaterialIcons", name: "home" },
  "arrow.left": { family: "MaterialIcons", name: "arrow-back" },
  "chevron.right": { family: "MaterialIcons", name: "chevron-right" },
  xmark: { family: "MaterialIcons", name: "close" },
  "line.3.horizontal": { family: "MaterialIcons", name: "menu" },
  ellipsis: { family: "MaterialIcons", name: "more-horiz" },

  // --- Headers & Tabs ---
  magnifyingglass: { family: "MaterialIcons", name: "search" },
  "cart.fill": { family: "MaterialIcons", name: "shopping-cart" },
  cart: { family: "MaterialCommunityIcons", name: "cart-outline" },
  "person.fill": { family: "MaterialIcons", name: "person" },
  person: { family: "MaterialIcons", name: "person-outline" },
  "bell.fill": { family: "MaterialIcons", name: "notifications" },
  bell: { family: "MaterialIcons", name: "notifications-none" },

  // --- Actions ---
  "heart.fill": { family: "MaterialIcons", name: "favorite" },
  heart: { family: "MaterialIcons", name: "favorite-border" },
  "trash.fill": { family: "MaterialIcons", name: "delete" },
  trash: { family: "MaterialIcons", name: "delete-outline" },
  plus: { family: "MaterialIcons", name: "add" },
  minus: { family: "MaterialIcons", name: "remove" },
  "square.and.arrow.up": { family: "MaterialIcons", name: "share" },
  "star.fill": { family: "MaterialIcons", name: "star" },

  // --- Auth / Forms ---
  envelope: { family: "MaterialIcons", name: "mail-outline" },
  lock: { family: "MaterialIcons", name: "lock-outline" },
  "eye.fill": { family: "MaterialIcons", name: "visibility" },
  "eye.slash.fill": { family: "MaterialIcons", name: "visibility-off" },

  // --- Categories ---
  tshirt: { family: "MaterialCommunityIcons", name: "tshirt-crew" },
  desktopcomputer: {
    family: "MaterialIcons",
    name: "laptop",
  },
  house: { family: "MaterialCommunityIcons", name: "sofa" },
  "dumbbell.fill": { family: "MaterialCommunityIcons", name: "dumbbell" },

  // --- Profile & Settings ---
  "camera.fill": { family: "MaterialIcons", name: "camera-alt" },
  "gearshape.fill": { family: "MaterialIcons", name: "settings" },
  "creditcard.fill": { family: "MaterialCommunityIcons", name: "credit-card" },
  "box.truck.fill": {
    family: "MaterialCommunityIcons",
    name: "truck-delivery",
  },
  "questionmark.circle.fill": { family: "MaterialIcons", name: "help" },
  "rectangle.portrait.and.arrow.right": {
    family: "MaterialIcons",
    name: "logout",
  },
} as const satisfies IconMapping;
