import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/Login";
import Register from "../views/Register";

const ModalStack = createNativeStackNavigator();

const Modal = () => (
  <ModalStack.Navigator screenOptions={{ headerShown: false }}>
    <ModalStack.Group>
      <ModalStack.Screen name="Login" component={Login} />
      <ModalStack.Screen name="Register" component={Register} />
    </ModalStack.Group>

    {/* <ModalStack.Group screenOptions={{}}>
    </ModalStack.Group> */}
  </ModalStack.Navigator>
);

export default Modal;
