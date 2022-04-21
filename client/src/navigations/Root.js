import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modal from "./Modal";
import Stack from "./Stack";
import PromotionDetail from "../views/promotions/PromotionDetail";
import Profile from "../views/profiles/Profile";
import MarketInfoChange from "../views/markets/MarketInfoChange";
import MarketInfo from "../views/markets/MarketInfo";
import ProfileChange from "../views/profiles/ProfileChange";
import MarketCreate from "../views/markets/MarketCreate";
import UserMarketList from "../views/profiles/UserMarketList";

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
      }}
    />
    <Nav.Screen
      name="사용자 정보변경"
      component={ProfileChange}
      options={{
        headerShown: false,
      }}
    />
    <Nav.Screen
      name="소매점 수정하기"
      component={MarketInfoChange}
      getId={({ params }) => params.id}
      options={{ headerShown: true }}
    />
    <Nav.Screen
      name="매장 정보"
      component={MarketInfo}
      options={{ headerShown: false }}
    />
    <Nav.Screen
      name="소매점 목록"
      component={UserMarketList}
      options={{ headerShown: true }}
    />
    <Nav.Screen
      name="소매점 등록"
      component={MarketCreate}
      options={{ headerShown: true }}
    />
  </Nav.Navigator>
);

export default Root;
