import { ParallaxScrollView, ThemedSafeAreaView } from "@/components/layout";
import {
  ColorSelector,
  PillRating,
  type Product,
  ProductFooter,
  ProductPrice,
  ProductSkeleton,
} from "@/components/tabs";
import { Button } from "@/components/ui";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { borderRadius, spacing } from "@/constants";
import mock from "@/data/mock.json";
import { useTheme } from "@/hooks";
import { useFavorite } from "@/hooks/use-favorite";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Suspense, use, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const fetchProductDetails = async (id: string | string[]): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mock.products.find((p) => p.id === id);
      if (product) {
        resolve(product as Product);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 1500);
  });
};

function ProductContent({
  productPromise,
}: Readonly<{
  productPromise: Promise<Product>;
}>) {
  const router = useRouter();
  const { colors, spacing, textStyles } = useTheme();
  const insets = useSafeAreaInsets();
  const product = use(productPromise);
  const { isFavorite, toggleFavorite } = useFavorite(product.isFavorite);

  const [selectedColor, setSelectedColor] = useState(
    product.availableColors?.[0],
  );

  const handleAddToCart = (quantity: number, totalPrice: number) => {
    console.log(
      `Añadido al carrito: ${quantity}x ${product.title} - $${totalPrice} - Color: ${selectedColor}`,
    );
  };

  return (
    <>
      {/* Header Flotante */}
      <View
        style={[
          styles.floatingHeader,
          { top: insets.top > 0 ? insets.top + spacing.md : spacing.md },
        ]}
      >
        <Button
          onPress={() => router.back()}
          variant="outline"
          icon="arrow.left"
          style={[
            styles.iconButton,
            {
              backgroundColor: colors.background,
              borderRadius: borderRadius.rounded,
            },
          ]}
          iconColor={colors.textPrimary}
          iconSize={16}
        />

        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => toggleFavorite(product.id)}
          style={[
            styles.iconButton,
            {
              backgroundColor: colors.background,
              borderRadius: borderRadius.rounded,
            },
          ]}
        />
      </View>

      <ParallaxScrollView
        headerImage={
          <Image source={{ uri: product.image }} style={styles.headerImage} />
        }
      >
        <View
          style={{
            paddingHorizontal: spacing.lg,
            gap: spacing.xl,
            paddingBottom: spacing.xxl,
          }}
        >
          {/* SECCIÓN 1: Título y Rating */}
          <View>
            <View style={styles.titleRow}>
              <Text
                style={[
                  textStyles.heroTitle,
                  {
                    color: colors.textPrimary,
                    flex: 1,
                    textAlign: "left",
                  },
                ]}
              >
                {product.title}
              </Text>

              <PillRating rating={product.rating} style={{ marginTop: 4 }} />
            </View>

            <ProductPrice
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          </View>

          {/* SECCIÓN 3: Selector de Color (Oculto si no hay colores) */}
          <ColorSelector
            availableColors={product.availableColors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

          {/* SECCIÓN 4: Descripción */}
          <View>
            <Text
              style={[
                textStyles.sectionTitle,
                { color: colors.textPrimary, marginBottom: spacing.sm },
              ]}
            >
              Description
            </Text>
            <Text
              style={[
                textStyles.bodyRegular,
                { color: colors.textSecondary, lineHeight: 24 },
              ]}
            >
              {product.description}
            </Text>
          </View>
        </View>
      </ParallaxScrollView>

      {/* SECCIÓN 5: Footer Dinámico (Cantidad + Botón) */}
      <ProductFooter
        price={product.price}
        stock={product.stock}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const productPromise = fetchProductDetails(id);

  return (
    <ThemedSafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Suspense fallback={<ProductSkeleton />}>
        <ProductContent productPromise={productPromise} />
      </Suspense>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.md,
  },
  floatingHeader: {
    position: "absolute",
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  iconButton: {
    width: 44,
    height: 44,
  },
});
