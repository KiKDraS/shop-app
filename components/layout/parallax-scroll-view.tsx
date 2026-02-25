import { spacing } from "@/constants";
import { useThemeColor } from "@/hooks";
import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from "react-native-reanimated";
import { ThemedView } from "./themed-view";

export const PARALLAX_HEADER_HEIGHT = 350;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export function ParallaxScrollView({ children, headerImage }: Props) {
  const backgroundColor = useThemeColor("background");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-PARALLAX_HEADER_HEIGHT, 0, PARALLAX_HEADER_HEIGHT],
            [-PARALLAX_HEADER_HEIGHT / 2, 0, PARALLAX_HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-PARALLAX_HEADER_HEIGHT, 0, PARALLAX_HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16}
    >
      <Animated.View
        style={[styles.header, { backgroundColor }, headerAnimatedStyle]}
      >
        {headerImage}
      </Animated.View>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: PARALLAX_HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: spacing.md,
    gap: 16,
    overflow: "hidden",
  },
});
