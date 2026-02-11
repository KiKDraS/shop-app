import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { MAPPING } from "./constants";

export type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;

export type IconSymbolName = keyof typeof MAPPING;
