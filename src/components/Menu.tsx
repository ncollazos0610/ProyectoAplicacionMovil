import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useThemeContext } from "./context/ThemeContext";
import { useLanguageContext } from "./context/Language";


export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useThemeContext();
  const { language, toggleLanguage } = useLanguageContext();

  const isDark = theme === "oscuro";

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: isDark ? "#0e1116" : "#15803d" },
      ]}
    >
      {/* LOGO + TÍTULO */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logotipo.png")}
          style={styles.logo}
        />
        <Text style={[styles.title, { color: "white" }]}>Natural's Samada</Text>
      </View>

      {/* CONTENEDOR: LENGUAJE - TEMA - MENÚ */}
      <View style={styles.rightContainer}>
        {/* CAMBIAR LENGUAJE */}
        <TouchableOpacity onPress={toggleLanguage} style={styles.actionBtn}>
          <Text style={styles.actionIcon}>🌐</Text>
        </TouchableOpacity>

        {/* CAMBIAR TEMA */}
        <TouchableOpacity onPress={toggleTheme} style={styles.actionBtn}>
          <Image
            source={require("../../assets/tema.png")}
            style={styles.themeIcon}
          />
        </TouchableOpacity>

        {/* ABRIR / CERRAR MENÚ */}
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.menuBtn}>
          <Text style={styles.menuIcon}>{isOpen ? "✕" : "☰"}</Text>
        </TouchableOpacity>
      </View>

      {/* NAV */}
      {isOpen && (
        <View
          style={[
            styles.menu,
            { backgroundColor: isDark ? "#1a1f2b" : "#166534" },
          ]}
        >
          <TouchableOpacity
            onPress={() => setIsOpen(false)}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsOpen(false)}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Productos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsOpen(false)}
            style={styles.menuItem}
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
    marginTop: 40
  },

  /* LOGO */
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

  /* CONTENEDOR DE ACCIONES A LA DERECHA */
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  /* BOTÓN CAMBIAR LENGUAJE / TEMA */
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

  /* BOTÓN DEL MENÚ */
  menuBtn: {
    padding: 4,
  },
  menuIcon: {
    color: "white",
    fontSize: 28,
  },

  /* NAV */
  menu: {
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
