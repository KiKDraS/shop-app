import { useTheme } from "@/hooks";
import { useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

interface SkeletonProps {
  style?: StyleProp<ViewStyle>;
}

export function Skeleton({ style }: Readonly<SkeletonProps>) {
  const { colors, borderRadius } = useTheme();
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          opacity,
          backgroundColor: colors.border,
          borderRadius: borderRadius.sm,
        },
        style,
      ]}
    />
  );
}
