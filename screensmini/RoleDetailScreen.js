import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  SafeAreaView,
} from 'react-native';

const permissions = [
  { group: 'Tổng quan', description: 'Doanh thu tổng quan' },
  { group: 'Báo cáo', description: 'Hệ thống báo cáo doanh thu, mặt hàng, kho hàng, tài chính, khuyến mại, nhân viên' },
  { group: 'Đặt bàn', description: 'Danh sách đơn đặt bàn' },
  { group: 'Hóa đơn', description: 'Quản lý hóa đơn đã thanh toán' },
  { group: 'Mặt hàng', description: 'Quản lý mặt hàng, thực đơn, danh mục, nhóm lựa chọn, combo' },
  { group: 'Nhân viên', description: 'Quản lý nhân viên và phân quyền' },
];

export default function RoleDetailScreen({ route }) {
  const { role } = route.params;
  const [roleName, setRoleName] = useState(role.name);
  const [access, setAccess] = useState(
    permissions.reduce((acc, p) => ({ ...acc, [p.group]: false }), {})
  );

  const togglePermission = (group) => {
    setAccess((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const handleUpdate = () => {
    Alert.alert('Cập nhật thành công', `Vai trò "${roleName}" đã được lưu.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={{ paddingBottom: 100 }} // chừa chỗ cho nút cố định
        >
          <Text style={styles.title}>Thông tin vai trò</Text>

          <Text style={styles.label}>Nhập tên vai trò (*)</Text>
          <TextInput
            style={styles.input}
            value={roleName}
            onChangeText={setRoleName}
            placeholder="Tên vai trò"
          />

          <Text style={styles.note}>
            Vai trò nhân viên khi đăng nhập quản trị hoặc ứng dụng bán hàng
          </Text>
          <Text style={styles.warning}>
            * Lưu ý: Tất cả các app của nhà hàng cần cập nhật lên phiên bản mới nhất để đảm bảo việc phân quyền được chính xác nhất.
          </Text>

          <Text style={styles.section}>Quản lý nhà hàng</Text>

          {permissions.map((perm, index) => (
            <View key={index} style={styles.permissionItem}>
              <View style={styles.permissionHeader}>
                <Text style={styles.permissionTitle}>{perm.group}</Text>
                <Switch
                  value={access[perm.group]}
                  onValueChange={() => togglePermission(perm.group)}
                />
              </View>
              <Text style={styles.permissionDesc}>{perm.description}</Text>
            </View>
          ))}
        </ScrollView>

        {/* 🔹 Nút cập nhật cố định dưới đáy */}
        <View style={styles.fixedButtonContainer}>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateText}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, position: 'relative' },
  scrollArea: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 10 },
  label: { fontSize: 16, color: '#333', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  note: { fontSize: 14, color: '#555', marginBottom: 6 },
  warning: { fontSize: 12, color: '#FF3B30', marginBottom: 20 },
  section: { fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#007AFF' },
  permissionItem: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  permissionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  permissionTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
  permissionDesc: { fontSize: 14, color: '#777', marginTop: 4 },

  // ✅ Nút cố định dưới đáy
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  updateButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  updateText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
