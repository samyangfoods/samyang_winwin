import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../views/Main";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PromotionCreate from "../views/PromotionCreate";

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
      <Tab.Screen
        name="행사등록"
        component={PromotionCreate}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="tune" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Stack;
