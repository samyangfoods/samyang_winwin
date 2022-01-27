import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../views/Main";
import PromotionDetail from "../views/PromotionDetail";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF7D0D",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="행사현황"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="bell" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Stack;
