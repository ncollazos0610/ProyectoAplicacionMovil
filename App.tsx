import React from "react";
import BotonInicio from "./src/components/BotonInicio";

export default function App() {
  const handleLogin = () => {
    console.log("Sesion iniciada ");
  };

  return (
    <BotonInicio
      titulo="Iniciar sesion"
      onPress={handleLogin}
      color="#007BFF" 
    />
  );
}
