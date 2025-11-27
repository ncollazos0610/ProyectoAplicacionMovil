import React from "react";
import { View, StyleSheet } from "react-native";

// ------ Contextos ------
import { ThemeProvider } from "./src/components/context/ThemeContext";
import { LanguageProvider } from "./src/components/context/Language";

// ------ Componentes ------
import Menu from "./src/components/Menu";
  
import BotonInicio from "./src/components/BotonInicio";
import LikeButton from "./src/components/LikeButton";
import Landing from "./src/components/screens/LandingPage";

export default function App() {
  const handleLogin = () => {
    console.log("Sesión iniciada");
  };

  return (
    <ThemeProvider>
      <LanguageProvider>

        <View style={styles.container}>

          {/* ----------- MENÚ SUPERIOR ----------- */}
          <Menu />

          {/* ----------- LANDING PAGE (Scrollable por dentro) ----------- */}
          <View style={{ flex: 1 }}>
            <Landing/>
          </View>

          {/* ----------- SECCIÓN FINAL ----------- */}
          <View style={styles.bottomButtons}>
            <LikeButton />
          </View>

        </View>

      </LanguageProvider>
    </ThemeProvider>
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
