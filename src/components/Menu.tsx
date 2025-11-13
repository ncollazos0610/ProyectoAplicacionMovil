import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logotipo.png")} style={styles.logo} />
        <Text style={styles.title}>Natural's Samada</Text>
      </View>

      {/* Operador Ternario */}
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.menuIcon}>{isOpen ? "✕" : "☰"}</Text>
      </TouchableOpacity>

      {/* Nav */}
      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.menuItem}>
            <Text style={styles.menuText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.menuItem}>
            <Text style={styles.menuText}>Productos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.menuItem}>
            <Text style={styles.menuText}>Clientes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0e1116",
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 9,
  },
  title: {
    color: "moccasin",
    fontSize: 18,
    fontWeight: "600",
  },
  menuIcon: {
    color: "white",
    fontSize: 28,
  },
  menu: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "#1a1f2b",
    borderRadius: 8,
    padding: 16,
    width: 160,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuText: {
    color: "white",
    fontSize: 18,
  },
});