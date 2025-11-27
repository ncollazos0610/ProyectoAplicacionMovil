import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from "./LoginScreen.styles";

// Tipado del stack
type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.subtitle}>
        Accede a tu cuenta para gestionar tus pedidos y preferencias
      </Text>

      <View style={styles.card}>

        <Text style={styles.welcome}>Bienvenido de vuelta</Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="tu@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="•••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.smallText}>Recordarme</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={styles.smallText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text style={styles.link}> Regístrate aquí</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
