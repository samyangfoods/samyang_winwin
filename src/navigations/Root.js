import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modal from "./Modal";
import Stack from "./Stack";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Modal" component={Modal} />
    <Nav.Screen name="Stack" component={Stack} />
  </Nav.Navigator>
);

export default Root;
