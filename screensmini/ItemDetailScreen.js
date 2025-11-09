import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ItemDetailScreen({ route, navigation }) {
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [cost, setCost] = useState(item.cost);

  const handleSave = () => {
    Alert.alert('Đã lưu', `Mặt hàng "${name}" đã được cập nhật.`);
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Xóa mặt hàng', `Bạn có chắc muốn xóa "${name}"?`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.label}>Tên mặt hàng</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Giá bán</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>Giá vốn</Text>
      <TextInput style={styles.input} value={cost} onChangeText={setCost} keyboardType="numeric" />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>💾 Lưu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>🗑️ Xóa mặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: 120, height: 120, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 6, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#34C759',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveText: { color: '#fff', fontSize: 16 },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteText: { color: '#fff', fontSize: 16 },
});