import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/Login";
import CreateUser from "../views/CreateUser";

const ModalStack = createNativeStackNavigator();

const Modal = () => (
  <ModalStack.Navigator screenOptions={{ headerShown: false }}>
    <ModalStack.Group>
      <ModalStack.Screen name="Login" component={Login} />
    </ModalStack.Group>

    <ModalStack.Group screenOptions={{ presentation: "modal" }}>
      <ModalStack.Screen name="CreateUser" component={CreateUser} />
    </ModalStack.Group>
  </ModalStack.Navigator>
);

export default Modal;
