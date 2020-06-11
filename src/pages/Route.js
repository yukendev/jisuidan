import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Modal from "./Modal";

const Stack = createStackNavigator();
export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Navigator name="Home" component={Home} />
      <Stack.Navigator name="Modal" component={Modal} />
    </Stack.Navigator>
  );
}
