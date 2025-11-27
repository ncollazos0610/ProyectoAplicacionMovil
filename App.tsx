import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// ------ Contextos ------
import { ThemeProvider } from "./src/components/context/ThemeContext";
import { LanguageProvider } from "./src/components/context/Language";

// ------ Componentes ------
import Landing from "./src/screens/LandingPage";
import LikeButton from "./src/components/LikeButton";
import Menu from "./src/components/Menu";
import LoginScreen from "./src/screens/LoginScreen";
import Productos from "./src/screens/Productos";

// Tipos para navegación
type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
  Productos: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

const Stack = createNativeStackNavigator<RootStackParamList>();

function PantallaPrincipal({ navigation }: Props) {

  return (
    <ThemeProvider>
      <LanguageProvider>

        <View style={styles.container}>
          
          {/* MENÚ */}
          <Menu />

          {/* LANDING */}
          <View style={{ flex: 1, marginTop: 120}}>
            <Landing />
          </View>

          {/* BOTÓN LIKE */}
          <View style={styles.bottomButtons}>
            <LikeButton />
          </View>

        </View>

      </LanguageProvider>
    </ThemeProvider>
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
                <Stack.Screen
          name="Productos"
          component={Productos}
          options={{ title: "Productos" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ------ Estilos ------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  bottomButtons: {
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
