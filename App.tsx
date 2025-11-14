import React from "react";
import { View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import BotonInicio from "./src/components/BotonInicio";
import LikeButton from "./src/components/LikeButton";
import Menu from "./src/components/Menu";
import LoginScreen from "./src/screens/LoginScreen";

// Tipos para navegación
type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

const Stack = createNativeStackNavigator<RootStackParamList>();


function PantallaPrincipal({ navigation }: Props) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Menu />

      <BotonInicio
        titulo="Iniciar sesión"
        onPress={handleLogin}
        color="#007BFF"
      />

      <LikeButton />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">

        <Stack.Screen
          name="Inicio"
          component={PantallaPrincipal}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Iniciar Sesión" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
