import { Tabs } from "expo-router";
import React from "react";

import { Badge, HapticTab, IconSymbol } from "@/components/ui";
import { colors, tabs } from "@/constants";
import { useColorScheme } from "@/hooks";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const colorsFromScheme = colors[colorScheme];
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorsFromScheme.primary,
        tabBarInactiveTintColor: colorsFromScheme.onPrimary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: insets.bottom > 0 ? 56 + insets.bottom : 56,
          borderTopWidth: 1,
          borderTopColor: colorsFromScheme.surface,
        },
        tabBarIconStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {Object.values(tabs).map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => {
              if (tab.name === tabs.cart.name) {
                return (
                  <View style={{ position: "relative" }}>
                    <IconSymbol size={24} name={tab.icon} color={color} />
                    <Badge count={2} color={colorsFromScheme.primary} />
                  </View>
                );
              }

              return <IconSymbol size={24} name={tab.icon} color={color} />;
            },
          }}
        />
      ))}
    </Tabs>
  );
}
