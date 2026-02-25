import { FavoriteButton } from "@/components/ui/favorite-button";
import { borderRadius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { useFavorite } from "@/hooks/use-favorite";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { calculateDiscountedPrice, type Product } from "../../product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: Readonly<ProductCardProps>) {
  const { colors, textStyles, spacing } = useTheme();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorite(product.isFavorite);

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleProductPress(product.id)}
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
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => toggleFavorite(product.id)}
          style={styles.favoriteButton}
        />
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
          ${calculateDiscountedPrice(product.price, product.discountPercentage)}
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
  },
});
