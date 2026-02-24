import { IconSymbolName } from "@/components/ui";
import { spacing } from "@/constants/theme";
import { useTheme } from "@/hooks";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import mock from "../../../../data/mock.json";
import { CategoryItem } from "../category-item";

export function Categories() {
  const { textStyles, spacing } = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[textStyles.sectionTitle, { paddingHorizontal: spacing.sm }]}
      >
        Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.sm,
          gap: spacing.md,
        }}
      >
        {mock.categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            title={cat.title}
            icon={cat.icon as IconSymbolName}
            onPress={() => console.log(`Categoría seleccionada: ${cat.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },
});
