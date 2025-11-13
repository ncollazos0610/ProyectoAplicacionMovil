import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addLike}>
        <Text style={styles.icon}>❤️</Text>
        <Text style={styles.count}>{likes}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 3, // sombra en Android
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LikeButton;
