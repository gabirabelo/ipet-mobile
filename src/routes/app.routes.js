import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./../pages/dashboard";

const AppStack = createStackNavigator();

const AuthRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: "Dashboard",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </AppStack.Navigator>
);

export default AuthRoutes;
