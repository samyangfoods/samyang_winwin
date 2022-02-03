import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../views/Main";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PromotionCreate from "../views/promotions/PromotionCreate";
import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";
import MarketInput from "../views/markets/MarketInput";
import MarketList from "../views/markets/MarketList";

const Tab = createBottomTabNavigator();

const Stack = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF7D0D",
        tabBarShowLabel: false,
        headerRight: () => (
          <Btn onPress={() => navigation.navigate("사용자 정보")}>
            <FontAwesome5 name="user-alt" size={24} color="#aaa" />
          </Btn>
        ),
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
      <Tab.Screen
        name="소매점 목록"
        component={MarketList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="google" size={size} color={color} />;
          },
          headerRight: () => null,
        }}
      />
      <Tab.Screen
        name="소매점 등록"
        component={MarketInput}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="commenting" size={size} color={color} />;
          },
          headerRight: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Stack;

const Btn = styled.TouchableOpacity`
  padding-right: 10%;
`;
