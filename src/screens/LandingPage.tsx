import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";

import LikeButton from "../components/LikeButton";
import { useThemeContext } from "../components/context/ThemeContext";
import { useLanguageContext } from "../components/context/Language";
import BotonInicio from "../components/BotonInicio";

export default function Landing() {
  const { language, toggleLanguage } = useLanguageContext();
  const { theme, toggleTheme } = useThemeContext();
  const handleLogin = () => {
    console.log("Sesión iniciada");
  };

  const text = {
    es: {
      title: "Bienvenido a Natural's Samada",
      description:
        "Productos naturales para tu bienestar, salud y estilo de vida.",
      catalog: "Ver catálogo",
      ctaTitle: "Únete a nuestra comunidad",
      ctaText: "Crea tu cuenta o inicia sesión para descubrir más beneficios.",
      register: "Registrarme",
      haveAccount: "Ya tengo cuenta",
      benefitsTitle: "Beneficios de elegir Samada",
      benefit1Title: "100% Natural",
      benefit1Desc:
        "Productos elaborados con ingredientes completamente naturales.",
      benefit2Title: "Calidad Certificada",
      benefit2Desc: "Cumplimos con estándares de laboratorio y calidad.",
      benefit3Title: "Acompañamiento Profesional",
      benefit3Desc: "Te guiamos en tu proceso de bienestar y salud natural.",
      footerContact: "Contáctanos",
      footerAbout: "Sobre Nosotros",
      footerDesc:
        "Natural's Samada es una empresa dedicada al bienestar natural.",
      footerLicense: "© Natural's Samada. Todos los derechos reservados.",
      footerCopy: "Desarrollado con ❤️ por Samada Dev",
    },

    en: {
      title: "Welcome to Natural's Samada",
      description: "Natural products for your wellness, health and lifestyle.",
      catalog: "View catalog",
      ctaTitle: "Join our community",
      ctaText: "Create an account or log in to unlock more benefits.",
      register: "Sign Up",
      haveAccount: "I already have an account",
      benefitsTitle: "Why choose Samada",
      benefit1Title: "100% Natural",
      benefit1Desc: "Products made with fully natural and healthy ingredients.",
      benefit2Title: "Certified Quality",
      benefit2Desc: "We follow strict laboratory and quality standards.",
      benefit3Title: "Professional Support",
      benefit3Desc: "We guide you on your natural wellness journey.",
      footerContact: "Contact Us",
      footerAbout: "About Us",
      footerDesc:
        "Natural's Samada is a company dedicated to natural wellness.",
      footerLicense: "© Natural's Samada. All rights reserved.",
      footerCopy: "Developed with passion by NJP Dev",
    },
  };

  const t = text[language];
  const isDark = theme === "oscuro";

  return (
    <ScrollView style={{ flex: 1, backgroundColor: isDark ? "#000" : "#fff" }}>
      {/* ---------- BANNER ---------- */}
      <ImageBackground
        source={require("../../../assets/Products.png")}
        style={styles.banner}
        imageStyle={{ resizeMode: "cover" }}
      >
        <View style={styles.bannerOverlay} />

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{t.title}</Text>

          <Text style={styles.bannerDesc}>{t.description}</Text>

          <TouchableOpacity style={styles.catalogBtn}>
            <Text style={styles.catalogText}>{t.catalog}</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 130 }}>
          </View>
        </View>
      </ImageBackground>

      {/* ---------- CTA ---------- */}
      <View style={[styles.ctaBox, isDark ? styles.ctaDark : styles.ctaLight]}>
        <Text style={styles.ctaTitle}>{t.ctaTitle}</Text>

        <Text style={styles.ctaDesc}>{t.ctaText}</Text>

        <View style={styles.ctaRow}>
          <BotonInicio
            titulo="Iniciar Sesión"
            onPress={handleLogin}
            color="#fff"
          />
        </View>
      </View>

      {/* ---------- BENEFICIOS ---------- */}
      <View
        style={[styles.benefitsSection, isDark && { backgroundColor: "#000" }]}
      >
        <Text style={styles.benefitsTitle}>{t.benefitsTitle}</Text>

        <View style={{ gap: 30 }}>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>🌿</Text>
            <Text style={styles.benefitTitle}>{t.benefit1Title}</Text>
            <Text style={styles.benefitDesc}>{t.benefit1Desc}</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>🔬</Text>
            <Text style={styles.benefitTitle}>{t.benefit2Title}</Text>
            <Text style={styles.benefitDesc}>{t.benefit2Desc}</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>👨‍⚕️</Text>
            <Text style={styles.benefitTitle}>{t.benefit3Title}</Text>
            <Text style={styles.benefitDesc}>{t.benefit3Desc}</Text>
          </View>
        </View>
      </View>

      {/* ---------- FOOTER ---------- */}
      <View
        style={[styles.footer, isDark ? styles.footerDark : styles.footerLight]}
      >
        <Text style={styles.footerTitle}>{t.footerContact}</Text>

        <Text style={styles.footerText}>📞 +57 3166412518</Text>
        <Text style={styles.footerText}>📧 samadagmail.com</Text>
        <Text style={styles.footerText}>📍 Popayán, Cauca</Text>

        <Text style={[styles.footerTitle, { marginTop: 20 }]}>
          {t.footerAbout}
        </Text>
        <Text style={styles.footerText}>{t.footerDesc}</Text>

        <Text style={styles.footerCopy}>{t.footerLicense}</Text>

        <Text style={styles.footerBottom}>{t.footerCopy}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerDark: {
    backgroundColor: "rgba(0,0,0,0.6)",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  headerLight: {
    backgroundColor: "rgba(21,128,61,0.7)",
  },

  row: { flexDirection: "row", alignItems: "center", gap: 8 },

  logo: { width: 40, height: 40, resizeMode: "contain" },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  themeIcon: { width: 32, height: 32, resizeMode: "contain" },

  languageBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  /* BANNER */
  banner: {
    width: "100%",
    height: 500,
    justifyContent: "flex-end",
  },

  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  bannerContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  bannerDesc: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 16,
  },

  catalogBtn: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },

  catalogText: {
    fontWeight: "600",
    color: "#000",
  },

  /* CTA */
  ctaBox: {
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  ctaDark: {
    backgroundColor: "#111",
  },

  ctaLight: {
    backgroundColor: "#15803d",
  },

  ctaTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    marginBottom: 8,
  },

  ctaDesc: {
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: 20,
  },

  ctaRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },

  ctaBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },

  ctaBtnText: {
    color: "#000",
    fontWeight: "600",
  },

  /* BENEFICIOS */
  benefitsSection: {
    backgroundColor: "#f3f4f6",
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  benefitsTitle: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 32,
  },

  benefitCard: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },

  benefitIcon: {
    fontSize: 48,
  },

  benefitTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },

  benefitDesc: {
    marginTop: 8,
    textAlign: "center",
  },

  /* FOOTER */
  footer: {
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  footerDark: { backgroundColor: "#111" },
  footerLight: { backgroundColor: "#e5e7eb" },

  footerTitle: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  footerText: {
    textAlign: "center",
    marginBottom: 4,
  },

  footerCopy: {
    textAlign: "center",
    opacity: 0.7,
    marginTop: 16,
    fontSize: 12,
  },

  footerBottom: {
    textAlign: "center",
    opacity: 0.5,
    marginTop: 20,
    fontSize: 11,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.3)",
    paddingTop: 10,
  },
});
