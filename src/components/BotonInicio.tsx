import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

//interfaz
interface BotonInicioProps {
  titulo: string;          
  onPress: () => void;     
  color?: string;         
}

//componente
export default function BotonInicio({
  titulo,
  onPress,
  color = "#4CAF50", 
}: BotonInicioProps) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Definimos los estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center", 
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 5,  
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
