import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modal from "./Modal";
import Stack from "./Stack";
import PromotionDetail from "../views/promotions/PromotionDetail";
import Profile from "../views/Profile";
import MarketInfoChange from "../views/markets/MarketInfoChange";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Modal" component={Modal} />
    <Nav.Screen name="Stack" component={Stack} />
    <Nav.Screen
      name="행사상세"
      component={PromotionDetail}
      getId={({ params }) => params.id}
      options={{ headerShown: true }}
    />
    <Nav.Screen
      name="사용자 정보"
      component={Profile}
      options={{
        headerShown: true,
        presentation: "modal",
      }}
    />
    <Nav.Screen
      name="소매점 수정하기"
      component={MarketInfoChange}
      getId={({ params }) => params.id}
      options={{ headerShown: true }}
    />
  </Nav.Navigator>
);

export default Root;
