// EmployeeDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmployeeDetailScreen({ route }) {
  const { employee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết nhân viên</Text>
      <Text style={styles.label}>Họ tên:</Text>
      <Text style={styles.value}>{employee.name}</Text>
      <Text style={styles.label}>Vai trò:</Text>
      <Text style={styles.value}>{employee.role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, color: '#555', marginTop: 10 },
  value: { fontSize: 16, color: '#333', fontWeight: '500' },
});