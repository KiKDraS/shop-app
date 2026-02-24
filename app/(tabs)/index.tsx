import { ThemedSafeAreaView } from "@/components/layout";
import { FeatureProducts } from "@/components/tabs";
import { Categories, SearchBarHeader } from "@/components/ui";

export default function HomeScreen() {
  return (
    <ThemedSafeAreaView>
      <SearchBarHeader />
      <Categories />
      <FeatureProducts />
    </ThemedSafeAreaView>
  );
}
