import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
type Props = {};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#222b45",
  },
};

export default function Navigation({}: Props) {
  return (
    <NavigationContainer theme={navTheme}>
      <TabNavigation />
    </NavigationContainer>
  );
}
