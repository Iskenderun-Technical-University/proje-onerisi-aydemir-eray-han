import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
