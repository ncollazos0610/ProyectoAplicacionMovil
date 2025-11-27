import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useThemeContext } from "./context/ThemeContext";
import { useLanguageContext } from "./context/Language";
import { useNavigation } from "@react-navigation/native";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const { toggleLanguage } = useLanguageContext();
  const navigation = useNavigation<any>();
  const isDark = theme === "oscuro";

  return (
    <View style={[styles.header, { backgroundColor: isDark ? "#0e1116" : "#15803d" }]}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logotipo.png")} style={styles.logo} />
        <Text style={[styles.title, { color: "white" }]}>Natural's Samada</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={toggleLanguage} style={styles.actionBtn}>
          <Text style={styles.actionIcon}>🌐</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleTheme} style={styles.actionBtn}>
          <Image source={require("../../assets/tema.png")} style={styles.themeIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.menuBtn}>
          <Text style={styles.menuIcon}>{isOpen ? "✕" : "☰"}</Text>
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={[styles.menu, { backgroundColor: isDark ? "#1a1f2b" : "#166534" }]}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate("Inicio");
            }}
          >
            <Text style={styles.menuText}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate("Productos");
            }}
          >
            <Text style={styles.menuText}>Productos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate("Clientes");
            }}
          >
            <Text style={styles.menuText}>Clientes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    zIndex: 100,
    elevation: 100,
    position: "absolute",
    width: "100%",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    fontSize: 22,
    color: "#fff",
  },
  themeIcon: {
    width: 26,
    height: 26,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  menuBtn: {
    padding: 4,
  },
  menuIcon: {
    color: "white",
    fontSize: 28,
  },
  menu: {
    zIndex: 200,
    position: "absolute",
    top: 64,
    right: 10,
    borderRadius: 10,
    padding: 16,
    width: 160,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    color: "white",
    fontSize: 18,
  },
});
