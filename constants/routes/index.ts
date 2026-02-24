import { IconSymbolName } from "@/components/ui";
import { Href } from "expo-router";

type TabConfig = {
  name: string;
  href: Href;
  title: string;
  icon: IconSymbolName;
};

export const tabs = {
  home: {
    name: "index",
    href: "/",
    title: "Home",
    icon: "house.fill",
  },
  search: {
    name: "search",
    href: "/search",
    title: "Search",
    icon: "magnifyingglass",
  },
  cart: {
    name: "cart",
    href: "/cart",
    title: "Cart",
    icon: "cart.fill",
  },
  profile: {
    name: "profile",
    href: "/profile",
    title: "Profile",
    icon: "person.fill",
  },
} satisfies Record<string, TabConfig>;
