import { borderRadius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, IconSymbol } from "../../../ui";

interface Props {
  price: number;
  stock: number;
  onAddToCart: (quantity: number, totalPrice: number) => void;
}

export function ProductFooter({ price, stock, onAddToCart }: Readonly<Props>) {
  const { colors, textStyles, spacing } = useTheme();
  const insets = useSafeAreaInsets();
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (price * quantity).toFixed(2);

  const handleIncrement = () => setQuantity((q) => (q < stock ? q + 1 : q));
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <View
      style={[
        styles.footer,
        {
          borderTopColor: colors.border,
          backgroundColor: colors.background,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 20,
        },
      ]}
    >
      <View style={[styles.quantityRow, { marginBottom: spacing.lg }]}>
        <Text
          style={[
            textStyles.sectionTitle,
            { color: colors.textPrimary, marginBottom: 0 },
          ]}
        >
          Quantity
        </Text>

        <View
          style={[styles.quantitySelector, { backgroundColor: colors.surface }]}
        >
          <TouchableOpacity
            onPress={handleDecrement}
            style={styles.qtyButton}
            disabled={quantity <= 1}
          >
            <IconSymbol
              name="minus"
              size={18}
              color={quantity <= 1 ? colors.textSecondary : colors.textPrimary}
            />
          </TouchableOpacity>

          <Text
            style={[
              textStyles.sectionTitle,
              {
                color: colors.textPrimary,
                marginBottom: 0,
                minWidth: 24,
                textAlign: "center",
              },
            ]}
          >
            {quantity}
          </Text>

          <TouchableOpacity
            onPress={handleIncrement}
            style={styles.qtyButton}
            disabled={quantity >= stock}
          >
            <IconSymbol
              name="plus"
              size={18}
              color={
                quantity >= stock ? colors.textSecondary : colors.textPrimary
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <Button
        onPress={() => onAddToCart(quantity, parseFloat(totalPrice))}
        text={`Add to Cart - $${totalPrice}`}
        icon="cart.fill"
        iconColor="#FFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
  },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  qtyButton: {
    padding: spacing.sm,
  },
});
