import { ThemedSafeAreaView } from "@/components/layout";
import { PARALLAX_HEADER_HEIGHT } from "@/components/layout/parallax-scroll-view";
import { Skeleton } from "@/components/ui";
import { useTheme } from "@/hooks";
import { StyleSheet, View } from "react-native";

export function ProductSkeleton() {
  const { spacing } = useTheme();

  return (
    <ThemedSafeAreaView style={styles.container}>
      <Skeleton style={styles.headerImage} />

      <View style={{ padding: spacing.lg }}>
        <Skeleton style={[styles.title, { marginBottom: spacing.sm }]} />
        <Skeleton style={[styles.titleShort, { marginBottom: spacing.lg }]} />

        <View style={styles.priceRow}>
          <Skeleton style={styles.price} />
          <Skeleton style={styles.priceDiscount} />
        </View>

        <View style={{ marginTop: spacing.xl, gap: spacing.sm }}>
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={[styles.textLine, { width: "60%" }]} />
        </View>

        <View style={{ marginTop: spacing.xl, gap: spacing.sm }}>
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={[styles.textLine, { width: "60%" }]} />
        </View>

        <View style={{ marginTop: spacing.xl, gap: spacing.sm }}>
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={styles.textLine} />
          <Skeleton style={[styles.textLine, { width: "60%" }]} />
        </View>

        <Skeleton style={[styles.bottomBox, { marginTop: spacing.xxl }]} />
      </View>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: PARALLAX_HEADER_HEIGHT,
    borderRadius: 0,
  },
  title: {
    height: 28,
    width: "80%",
  },
  titleShort: {
    height: 28,
    width: "50%",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  price: {
    height: 24,
    width: 80,
  },
  priceDiscount: {
    height: 20,
    width: 60,
  },
  textLine: {
    height: 16,
    width: "100%",
  },
  bottomBox: {
    height: 44,
    width: "100%",
    borderRadius: 12,
  },
});
