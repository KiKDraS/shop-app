import { ThemeColors } from "@/constants/theme";
import { TextStyle, ViewStyle } from "react-native";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type VariantStyleSelector = {
  disabled: boolean;
  colors: ThemeColors;
  variant: ButtonVariant;
};

export interface ButtonStyleState {
  container: ViewStyle;
  text: TextStyle;
}
