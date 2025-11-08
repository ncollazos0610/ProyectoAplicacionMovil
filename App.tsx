import React from 'react';
import { View, StyleSheet } from 'react-native';
import LikeButton from './src/components/LikeButton';


export default function App() {
  return (
    <View style={styles.container}>
      {/* Aquí irán otros componentes como el menú o el botón de login */}
      <LikeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
