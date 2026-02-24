import { spacing } from "@/constants/theme";
import React from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import mock from "../../../../data/mock.json";
import { ProductCard } from "../product-card";
import { FeatureProductsHeader } from "./feature-products-header";

export function FeatureProducts() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <FlatList
        data={mock.products}
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: spacing.xxl,
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={FeatureProductsHeader}
        ListFooterComponent={<View style={{ height: spacing.xxl }} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: spacing.lg,
          marginBottom: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => console.log(`Ir a: ${item.title}`)}
            onFavoritePress={() => console.log(`Favorito: ${item.id}`)}
          />
        )}
      />
    </View>
  );
}
