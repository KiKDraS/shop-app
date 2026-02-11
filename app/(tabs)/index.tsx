import { ThemedView } from "@/components/layout";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    router.push("/product/123");
  }, [router]);

  return (
    <ThemedView>
      <h1>Home</h1>
    </ThemedView>
  );
}
