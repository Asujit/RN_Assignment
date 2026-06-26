import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./redux/store";
import RootNavigator from "./navigation/RootNavigator";

const queryClient = new QueryClient();

const AppProviders = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppProviders;