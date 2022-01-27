import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { Theme } from "./src/settings/Theme";

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Root />
    </NavigationContainer>
  );
}
