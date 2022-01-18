import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./src/navigations/Root";
import { Theme } from "./src/settings/Theme";

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer theme={Theme}>
      <Root />
    </NavigationContainer>
  );
}
