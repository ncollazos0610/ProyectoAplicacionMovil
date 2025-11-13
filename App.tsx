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
      <View style={[styles.container, {flex:1}]}>
        <Menu />
        <BotonInicio
          titulo="Iniciar sesion"
          onPress={handleLogin}
          color="#007BFF"
        />
        
        <LikeButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


{/* 
    <View style={{ flex: 1 }}>
      <MobileMenu />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Welcome to the app</Text>
      </View>
    </View>
 */}
