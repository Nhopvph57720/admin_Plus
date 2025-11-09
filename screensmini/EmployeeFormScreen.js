import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function EmployeeFormScreen({ route, navigation }) {
  const { mode, employee, selectedRole } = route.params || {};
  const isAddMode = mode === 'add';

  const [fullName, setFullName] = useState(employee?.name || '');
  const [username, setUsername] = useState(employee?.username || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [phone, setPhone] = useState(employee?.phone || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pin, setPin] = useState(employee?.pin || '');
  const [role, setRole] = useState(selectedRole || employee?.role || '');

  const handleSubmit = () => {
    if (isAddMode && password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp');
      return;
    }

    Alert.alert(
      isAddMode ? 'Tạo tài khoản' : 'Cập nhật',
      `Nhân viên "${fullName}" đã được ${isAddMode ? 'tạo' : 'cập nhật'} thành công.`
    );
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {isAddMode ? 'Tạo tài khoản nhân viên' : 'Chi tiết nhân viên'}
      </Text>

      <Text style={styles.label}>Họ và tên nhân viên (*)</Text>
      <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />

      <Text style={styles.label}>Tên đăng nhập (*)</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      {isAddMode && (
        <>
          <Text style={styles.label}>Mật khẩu (*)</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

          <Text style={styles.label}>Xác nhận mật khẩu (*)</Text>
          <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        </>
      )}

      <Text style={styles.label}>Mã PIN đăng nhập thiết bị bán hàng (*)</Text>
      <TextInput style={styles.input} value={pin} onChangeText={setPin} keyboardType="numeric" maxLength={4} />

      {/* Vai trò */}
      <Text style={styles.label}>Vai trò</Text>
      <TouchableOpacity
        style={styles.rolePicker}
        onPress={() => navigation.navigate('Danh sách vai trò', { mode: 'select' })}
      >
        <Text style={[styles.roleText, !role && { color: '#999' }]}>
          {role || 'Chọn vai trò'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>{isAddMode ? 'Tạo tài khoản' : 'Cập nhật'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, color: '#333', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  rolePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    marginBottom: 16,
  },
  roleText: { fontSize: 16, color: '#333' },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: { color: '#fff', fontSize: 16 },
});
