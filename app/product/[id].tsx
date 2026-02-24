import { ParallaxScrollView, ThemedSafeAreaView } from "@/components/layout";
import { Product } from "@/components/tabs/home/product-card";
import { ProductSkeleton } from "@/components/tabs/product/product-skeleton/product-skeleton";
import { Button } from "@/components/ui";
import { borderRadius } from "@/constants";
import mock from "@/data/mock.json";
import { useTheme } from "@/hooks";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Suspense, use } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
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

  return (
    <>
      <ParallaxScrollView
        headerImage={
          <Image
            source={{ uri: product.images[0] }}
            style={styles.headerImage}
          />
        }
      >
        <View>
          <Text style={[textStyles.screenTitle, { color: colors.textPrimary }]}>
            {product.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
              marginTop: spacing.sm,
            }}
          >
            <Text style={[textStyles.sectionTitle, { color: colors.primary }]}>
              ${product.price.toFixed(2)}
            </Text>
            <Text style={{ textDecorationLine: "line-through", color: "gray" }}>
              ${(product.price * 1.15).toFixed(2)}
            </Text>
          </View>
        </View>

        <Text style={[textStyles.bodyRegular, { color: colors.textPrimary }]}>
          {product.description}
        </Text>
        <View
          style={{
            height: 400,
            backgroundColor: colors.background,
            borderRadius: 12,
          }}
        />
      </ParallaxScrollView>

      {/* Footer Fijo */}
      <View
        style={[
          styles.footer,
          { borderTopColor: colors.border, backgroundColor: colors.background },
        ]}
      >
        <Button
          onPress={() => console.log("Add to cart")}
          text={"Add to cart"}
        />
      </View>

      {/* Header Flotante */}
      <View style={[styles.floatingHeader, { top: insets.top + spacing.md }]}>
        <Button
          onPress={() => router.back()}
          variant="outline"
          icon="arrow.left"
          style={[styles.iconButton, { backgroundColor: colors.background }]}
          iconColor={colors.onPrimary}
          iconSize={16}
        />
        <Button
          onPress={() => console.log("Toggle favorite")}
          variant="outline"
          icon="heart.fill"
          style={[styles.iconButton, { backgroundColor: colors.background }]}
          iconColor={colors.onPrimary}
          iconSize={16}
        />
      </View>
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
  footer: {
    padding: 20,
    borderTopWidth: 1,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
  },
  floatingHeader: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.xxl,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderColor: "#3636361A",
  },
});
