import { ThemedSafeAreaView } from "@/components/layout";
import { Categories, Header } from "@/components/tabs";

export default function HomeScreen() {
  return (
    <ThemedSafeAreaView>
      <Header />
      <Categories />
      {/* <FeatureProducts /> */}
    </ThemedSafeAreaView>
  );
}
