import { Tabs } from "expo-router";
import React from "react";

import { HapticTab, IconSymbol, IconSymbolName } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type tab = {
  name: string;
  title: string;
  icon: IconSymbolName;
};

const TABS: Record<string, tab> = {
  HOME: {
    name: "index",
    title: "Home",
    icon: "house.fill",
  },
  SEARCH: {
    name: "search",
    title: "Search",
    icon: "magnifyingglass",
  },
  CART: {
    name: "cart",
    title: "Cart",
    icon: "cart.fill",
  },
  PROFILE: {
    name: "profile",
    title: "Profile",
    icon: "person.fill",
  },
};

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
      {Object.values(TABS).map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => {
              if (tab.name === TABS.CART.name) {
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
