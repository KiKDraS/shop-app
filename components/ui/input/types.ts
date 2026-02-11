import { ThemeColors } from "@/constants/theme";
import { TextStyle, ViewStyle } from "react-native";

export interface InputStyleState {
  container: ViewStyle;
  text: TextStyle;
  placeholder: string;
  icon: string;
}

export type InputStyleSelector = {
  colors: ThemeColors;
  error?: string;
  isFocused: boolean;
  disabled?: boolean;
};
