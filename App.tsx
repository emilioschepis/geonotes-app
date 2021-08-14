import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";

import { AuthProvider } from "./src/context/AuthContext";
import { KeyboardInsetProvider } from "./src/context/KeyboardContext";
import { LocationProvider } from "./src/context/LocationContext";
import client from "./src/graphql/client";
import MainStack from "./src/navigation/MainStack";

dayjs.extend(LocalizedFormat);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <LocationProvider>
          <KeyboardInsetProvider>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </KeyboardInsetProvider>
        </LocationProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
