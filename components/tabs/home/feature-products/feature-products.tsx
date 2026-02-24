import { spacing } from "@/constants";
import mock from "@/data/mock.json";
import React from "react";
import { FlatList, View } from "react-native";
import { ProductCard } from "../product-card";
import { FeatureProductsHeader } from "./feature-products-header";

export function FeatureProducts() {
  return (
    <View style={{ flex: 1 }}>
      <FeatureProductsHeader />
      <FlatList
        data={mock.products}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: spacing.xs,
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: spacing.lg,
          marginBottom: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}
