import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import UserListScreen from "../screens/UserListScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import { RootStackParamList } from "./navigationTypes";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="UserList"
        component={UserListScreen}
      />

      <Stack.Screen
        name="UserDetail"
        component={UserDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;