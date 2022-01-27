import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PromotionDetail from "../views/PromotionDetail";

const Nav = createNativeStackNavigator();

const Detail = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen
      name="행사상세"
      component={PromotionDetail}
      getId={({ params }) => params.id}
    />
  </Nav.Navigator>
);

export default Detail;
