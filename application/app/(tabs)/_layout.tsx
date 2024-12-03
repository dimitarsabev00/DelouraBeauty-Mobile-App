import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="home"
              size={32}
              color={focused ? "#fff" : "#5C5576"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping-cart"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="shopping-cart"
              size={32}
              color={focused ? "#fff" : "#5C5576"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: "#130d2d",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    paddingTop: 15,
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TabsLayout;
