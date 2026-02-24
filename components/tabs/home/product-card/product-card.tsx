import { IconSymbol } from "@/components/ui";
import { borderRadius, spacing } from "@/constants/theme";
import { useTheme } from "@/hooks";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

export function ProductCard({
  product,
  onPress,
  onFavoritePress,
}: Readonly<ProductCardProps>) {
  const { colors, textStyles, spacing } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.cardContainer,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.imageWrapper,
          {
            backgroundColor: colors.surface,
          },
        ]}
      >
        <Image
          source={{ uri: product.images[0] }}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onFavoritePress}
          style={[
            styles.favoriteButton,
            {
              backgroundColor: colors.background,
              shadowColor: colors.surface,
            },
          ]}
        >
          <IconSymbol
            name={product.isFavorite ? "heart.fill" : "heart"}
            size={16}
            color={product.isFavorite ? colors.danger : colors.textSecondary}
          />
        </TouchableOpacity>
      </View>

      <View style={{ padding: spacing.sm }}>
        <Text
          style={[
            textStyles.bodyRegular,
            { color: colors.textPrimary, fontSize: 13 },
          ]}
          numberOfLines={2}
        >
          {product.title}
        </Text>
        <Text style={[textStyles.priceCard, { marginTop: spacing.xs }]}>
          ${product.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    width: "48%",
    borderRadius: borderRadius.md,
    borderWidth: 1,
  },
  imageWrapper: {
    height: 140,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderTopLeftRadius: borderRadius.md,
    borderTopRightRadius: borderRadius.md,
    padding: spacing.sm,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
