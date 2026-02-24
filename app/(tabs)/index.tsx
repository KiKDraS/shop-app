import { ThemedSafeAreaView } from "@/components/layout";
import { Categories, FeatureProducts, Header } from "@/components/tabs";

export default function HomeScreen() {
  return (
    <ThemedSafeAreaView>
      <Header />
      <Categories />
      <FeatureProducts />
    </ThemedSafeAreaView>
  );
}
