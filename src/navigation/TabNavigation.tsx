import { StyleSheet } from "react-native";
import { Icon, useTheme } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MainNavigation from "./MainNavigation";
import Search from "../screens/Search";
import Information from "../screens/Information";
type Props = {};
const Tab = createBottomTabNavigator();
export default function TabNavigation({}: Props) {
  const theme = useTheme();
  const getIcon = (name: string, color: string) => (
    <Icon style={styles.icon} fill={color} name={name.split("|")[1]} />
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor: "#222b45",
          tabBarActiveBackgroundColor: "#222b45",
          tabBarActiveTintColor: theme["color-success-500"],
          tabBarInactiveTintColor: theme["color-primary-200"],
          tabBarIcon: ({ focused, color, size }) => getIcon(route.name, color),
        };
      }}
    >
      <Tab.Screen
        name="Home|film-outline"
        component={MainNavigation}
        options={{ headerShown: false, tabBarLabel: "Fragmanlar" }}
      />
      <Tab.Screen
        name="Search|search-outline"
        component={Search}
        options={{ headerShown: false, tabBarLabel: "Ara" }}
      />
      <Tab.Screen
        name="About|info-outline"
        component={Information}
        options={{ headerShown: false, tabBarLabel: "Bilgiler" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
