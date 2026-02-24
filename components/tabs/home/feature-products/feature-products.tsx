import { spacing } from "@/constants";
import mock from "@/data/mock.json";
import React from "react";
import { FlatList, View } from "react-native";
import { ProductCard } from "../product-card";
import { FeatureProductsHeader } from "./feature-products-header";

export function FeatureProducts() {
  return (
    <>
      <FeatureProductsHeader />
      <FlatList
        data={mock.products}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: spacing.xxl,
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: spacing.lg,
          marginBottom: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 200 }} />}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </>
  );
}
