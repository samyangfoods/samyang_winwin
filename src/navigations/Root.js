import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modal from "./Modal";
import Stack from "./Stack";
import PromotionDetail from "../views/PromotionDetail";
import UserInfo from "../views/UserInfo";
import Address from "../views/Address";

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
      component={UserInfo}
      options={{
        headerShown: true,
        presentation: "modal",
      }}
    />
    <Nav.Screen
      name="주소 검색"
      component={Address}
      options={{
        headerShown: true,
        presentation: "modal",
      }}
    />
  </Nav.Navigator>
);

export default Root;
