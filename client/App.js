import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { Theme } from "./src/settings/Theme";
import { Provider } from "react-redux";
import store from "./src/redux/store/index";

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </NavigationContainer>
  );
}
