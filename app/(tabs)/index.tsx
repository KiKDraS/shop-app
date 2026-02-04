import { ThemedSafeAreaView } from "@/components/themed-safe-area-view";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    router.push("/product/123");
  }, [router]);

  return (
    <ThemedSafeAreaView>
      <h1>Home</h1>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
