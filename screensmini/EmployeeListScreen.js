import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const employees = [
  { id: "1", name: "Pham Van Tu", role: "Lễ tân" },
  { id: "2", name: "Nguyen Thi Mai", role: "Phục vụ" },
  { id: "3", name: "Tran Quoc Anh", role: "Quản lý" },
];

const getInitials = (name) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : name[0];
};

export default function EmployeeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách nhân viên</Text>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Form nhân viên", {
                mode: "edit",
                employee: item, // truyền dữ liệu nhân viên
              })
            }
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {getInitials(item.name).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("Form nhân viên", { mode: "add" })}
      >
        <Text style={styles.createText}>+ Tạo tài khoản nhân viên</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  name: { fontSize: 16, fontWeight: "500", color: "#333" },
  role: { fontSize: 14, color: "#777" },
  createButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  createText: { color: "#fff", fontSize: 16 },
});
