import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./../pages/signIn";

const AuthStack = createStackNavigator();

const AppRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AppRoutes;
