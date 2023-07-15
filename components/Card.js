import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ pesantren }) => {
  if (!pesantren) {
    return null; // Return null if pesantren is undefined or null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pesantren.nama}</Text>
      <Text style={styles.subtitle}>Alamat: {pesantren.alamat}</Text>
      <Text style={styles.subtitle}>Telepon: {pesantren.telepon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Card;


