import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";

type Props = {};
const Tab = createBottomTabNavigator();
export default function TabNavigation({}: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
