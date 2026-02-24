import { Button } from "@/components/ui";
import { borderRadius, spacing } from "@/constants/theme";
import { useTheme } from "@/hooks";
import { useRouter } from "expo-router";
import { startTransition, useOptimistic, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: Readonly<ProductCardProps>) {
  const { colors, textStyles, spacing } = useTheme();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(
    isFavorite,
    (_, optimisticValue: boolean) => optimisticValue,
  );

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const modifyFavoriteStatusOnServer = async (productId: string) => {
    try {
      console.log(`Modificar favorito id: ${productId}`);

      await new Promise((resolve) => setTimeout(resolve, 800));
      startTransition(() => {
        setIsFavorite(!optimisticFavorite);
      });
    } catch (error) {
      console.error("Error al guardar en DB", error);
    }
  };

  const handleFavoritePress = (productId: string) => {
    startTransition(() => {
      addOptimisticFavorite(!optimisticFavorite);
    });
    modifyFavoriteStatusOnServer(productId);
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
          source={{ uri: product.images[0] }}
          style={styles.image}
          resizeMode="cover"
        />

        <Button
          onPress={() => handleFavoritePress(product.id)}
          variant="outline"
          icon={isFavorite ? "heart.fill" : "heart"}
          style={[
            styles.favoriteButton,
            { backgroundColor: colors.background },
          ]}
          iconColor={isFavorite ? colors.danger : colors.textSecondary}
          iconSize={16}
        />

        {/* <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleFavoritePress(product.id)}
          style={[
            styles.favoriteButton,
            {
              backgroundColor: colors.background,
              shadowColor: colors.surface,
            },
          ]}
        >
          <IconSymbol
            name={isFavorite ? "heart.fill" : "heart"}
            size={16}
            color={isFavorite ? colors.danger : colors.textSecondary}
          />
        </TouchableOpacity> */}
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
    width: 32,
    height: 32,
    borderRadius: borderRadius.xxl,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
