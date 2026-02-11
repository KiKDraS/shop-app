import { ParallaxScrollView, ThemedView } from "@/components/layout";
import { Button } from "@/components/ui";
import { useTheme } from "@/hooks";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const PRODUCT_IMAGE_URL =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop";

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  console.log(id);

  const router = useRouter();
  const { colors, spacing, textStyles } = useTheme();

  return (
    <ThemedView>
      <Stack.Screen options={{ headerShown: false }} />

      <ParallaxScrollView
        headerImage={
          <Image
            source={{ uri: PRODUCT_IMAGE_URL }}
            style={styles.headerImage}
          />
        }
      >
        <View>
          <Text style={[textStyles.screenTitle, { color: colors.textPrimary }]}>
            Premium Wireless Headphones
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
              $249.99
            </Text>
            <Text style={{ textDecorationLine: "line-through", color: "gray" }}>
              $289.99
            </Text>
          </View>
        </View>

        <Text style={[textStyles.bodyRegular, { color: colors.textPrimary }]}>
          Experience premium audio quality with our wireless headphones.
          Featuring advanced noise cancellation, 30-hour battery life... (Aquí
          va el resto de la descripción, reviews, etc. para probar el scroll)
        </Text>
        <View
          style={{
            height: 400,
            backgroundColor: colors.background,
            borderRadius: 12,
          }}
        />
      </ParallaxScrollView>

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Button
          onPress={() => console.log("Add to cart")}
          title={"Add to cart"}
        />
      </View>

      <View style={styles.floatingHeader}>
        <Button
          onPress={() => router.back()}
          title={"←"}
          variant="outline"
          style={styles.iconButton}
        />
        <Button
          onPress={() => console.log("Toggle favorite")}
          title={"♡"}
          variant="outline"
          style={styles.iconButton}
        />
      </View>
    </ThemedView>
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
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderColor: "#3636361A",
  },
});
