import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { items } from './items';

export default function ItemListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Chi tiết mặt hàng', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Thêm mặt hàng')}
      >
        <Text style={styles.addText}>+ Thêm mặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { flexDirection: 'row', marginBottom: 16, alignItems: 'center' },
  image: { width: 60, height: 60, borderRadius: 8 },
  info: { marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#007AFF' },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addText: { color: '#fff', fontSize: 16 },
});