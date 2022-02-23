import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { Theme } from "./src/settings/Theme";
import { Provider } from "react-redux";
import store from "./src/redux/store/index";
import { connectToDevTools } from "react-devtools-core";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  // flipper setting
  if (__DEV__) {
    connectToDevTools({
      host: "localhost",
      port: 8097,
    });
  }
  return (
    <NavigationContainer theme={Theme}>
      <Provider store={store}>
        <MenuProvider>
          <Root />
        </MenuProvider>
      </Provider>
    </NavigationContainer>
  );
}
