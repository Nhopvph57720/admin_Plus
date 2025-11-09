import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const roles = [
  { id: '1', name: 'Quản lý', accounts: 0 },
  { id: '2', name: 'Lễ tân', accounts: 1 },
  { id: '3', name: 'Phục vụ', accounts: 0 },
];

export default function RoleListScreen({ route, navigation }) {
  const mode = route.params?.mode || 'view'; // 'view' | 'select'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách vai trò</Text>

      <FlatList
        data={roles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.roleItem}
            onPress={() => {
              if (mode === 'select') {
                // 🔹 Nếu đang chọn vai trò cho nhân viên
                navigation.navigate('EmployeeForm', { selectedRole: item.name });
              } else {
                // 🔹 Nếu đang xem bình thường
                navigation.navigate('Chi tiết vai trò', { role: item });
              }
            }}
          >
            <Text style={styles.roleName}>{item.name}</Text>
            <Text style={styles.roleCount}>{item.accounts} tài khoản</Text>
          </TouchableOpacity>
        )}
      />

      {mode === 'view' && (
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('Tạo vai trò')}
        >
          <Text style={styles.createText}>+ Tạo vai trò mới</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  roleItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  roleName: { fontSize: 16, fontWeight: '500', color: '#333' },
  roleCount: { fontSize: 14, color: '#777' },
  createButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  createText: { color: '#fff', fontSize: 16 },
});
