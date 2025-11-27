import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento: number;
  categoria: string;
  imagen: string;
}

export default function Productos() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [carrito, setCarrito] = useState<Producto[]>([]);

  
  const productos: Producto[] = [
    {
      id: 1,
      nombre: "Aceite Esencial Lavanda",
      precio: 25000,
      descuento: 10,
      categoria: "Aceites esenciales",
      imagen: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      nombre: "Té Detox Natural",
      precio: 18000,
      descuento: 15,
      categoria: "Tés e infusiones",
      imagen: "https://via.placeholder.com/200",
    },
  ];

  
  const productosFiltrados = productos.filter((p) => {
    const coincideTexto = p.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === "Todas" ||
      p.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

 
  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const getTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Natural's Samada</Text>

        <TouchableOpacity onPress={() => setMostrarCarrito(true)}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/263/263142.png" }}
            style={styles.carritoIcon}
          />
        </TouchableOpacity>
      </View>

      {/* MODAL CARRITO */}
      <Modal visible={mostrarCarrito} animationType="slide">
        <View style={styles.modalCarrito}>
          <View style={styles.carritoHeader}>
            <Text style={styles.carritoTitulo}>Carrito 🛒</Text>

            <TouchableOpacity onPress={() => setMostrarCarrito(false)}>
              <Text style={styles.cerrarBtn}>Cerrar ✖</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            {carrito.map((item, index) => (
              <View key={index} style={styles.carritoItem}>
                <Image source={{ uri: item.imagen }} style={styles.carritoImg} />
                <Text style={styles.carritoNombre}>{item.nombre}</Text>
                <Text style={styles.carritoPrecio}>${item.precio}</Text>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.total}>Total: ${getTotal()}</Text>
        </View>
      </Modal>

      {/* BÚSQUEDA Y FILTROS */}
      <View style={styles.filtros}>
        <TextInput
          style={styles.input}
          placeholder="Buscar productos..."
          onChangeText={(text) => setTextoBusqueda(text)}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            "Todas",
            "Goteros",
            "Pastilleros",
            "Aceites esenciales",
            "Suplementos",
            "Tés e infusiones",
            "Jarabes",
          ].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoriaBtn,
                categoriaSeleccionada === cat && styles.categoriaActiva,
              ]}
              onPress={() => setCategoriaSeleccionada(cat)}
            >
              <Text
                style={[
                  styles.categoriaTexto,
                  categoriaSeleccionada === cat && styles.categoriaTextoActiva,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* LISTA DE PRODUCTOS */}
      <FlatList
        data={productosFiltrados}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.cardImg} />

            <Text style={styles.cardName}>{item.nombre}</Text>
            <Text style={styles.cardPrice}>${item.precio}</Text>

            <TouchableOpacity
              style={styles.btnAgregar}
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.btnText}>Agregar al Carrito</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f6", padding: 10 },

  header: {
    backgroundColor: "#1b7b3f",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: { fontSize: 22, color: "white", fontWeight: "bold" },

  carritoIcon: { width: 28, height: 28, tintColor: "white" },

  filtros: { marginVertical: 10 },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  categoriaBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 8,
  },

  categoriaActiva: {
    backgroundColor: "#1b7b3f",
  },

  categoriaTexto: { color: "#333" },

  categoriaTextoActiva: { color: "#fff" },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },

  cardImg: { width: 120, height: 120, borderRadius: 8 },

  cardName: { fontSize: 16, marginVertical: 6 },

  cardPrice: { fontSize: 16, fontWeight: "bold" },

  btnAgregar: {
    backgroundColor: "#1b7b3f",
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
  },

  btnText: { color: "white" },

  
  modalCarrito: { flex: 1, padding: 20, backgroundColor: "#fff" },

  carritoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  carritoTitulo: { fontSize: 24, fontWeight: "bold" },

  cerrarBtn: { fontSize: 18, color: "red" },

  carritoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: "#ddd",
  },

  carritoImg: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },

  carritoNombre: { fontSize: 16, flex: 1 },

  carritoPrecio: { fontSize: 16, fontWeight: "bold" },

  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
