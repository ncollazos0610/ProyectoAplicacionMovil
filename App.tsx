import BotonInicio from "./src/components/BotonInicio";
import React from "react";
import { View, StyleSheet } from "react-native";
import LikeButton from "./src/components/LikeButton";
import Menu from "./src/components/Menu";

export default function App() {
  const handleLogin = () => {
    console.log("Sesion iniciada ");
  };

  return (
    <>
      <View style={styles.container}>
        <BotonInicio
          titulo="Iniciar sesion"
          onPress={handleLogin}
          color="#007BFF"
        />
        <Menu />

        {/* Aquí irán otros componentes como el menú o el botón de login */}
        <LikeButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
