import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet, Text, View } from "react-native";
import { calculateDiscountedPrice } from "../utils";
import { DiscountBadge } from "./discount-badge";

interface Props {
  price: number;
  discountPercentage?: number;
}

export function ProductPrice({
  price,
  discountPercentage = 0,
}: Readonly<Props>) {
  const { colors, textStyles } = useTheme();

  const hasDiscount = discountPercentage > 0;

  return (
    <View style={styles.container}>
      {/* Precio Final (El más grande) */}
      <Text
        style={[
          textStyles.heroTitle,
          { color: colors.primary, textAlign: "left" },
        ]}
      >
        ${calculateDiscountedPrice(price, discountPercentage)}
      </Text>

      {hasDiscount && (
        <>
          <Text
            style={[
              textStyles.bodyRegular,
              {
                textDecorationLine: "line-through",
                color: colors.textSecondary,
              },
            ]}
          >
            ${price.toFixed(2)}
          </Text>

          <DiscountBadge discountPercentage={discountPercentage} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginTop: spacing.md,
  },
});
