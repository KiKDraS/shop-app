import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { MAPPING } from "./constants";

export type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];
export type MaterialCommunityIconName = ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type IconDefinition =
  | { family: "MaterialIcons"; name: MaterialIconName }
  | { family: "MaterialCommunityIcons"; name: MaterialCommunityIconName };

export type IconMapping = Partial<
  Record<SymbolViewProps["name"], IconDefinition>
>;

export type IconSymbolName = keyof typeof MAPPING;
