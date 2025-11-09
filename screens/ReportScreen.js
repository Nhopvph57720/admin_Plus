import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const reportData = [
  {
    title: 'BÁO CÁO DOANH THU',
    icon: 'bar-chart',
    children: [
      'Báo cáo doanh thu tổng quan',
      'Báo cáo theo phương thức thanh toán',
      'Báo cáo doanh thu theo phục vụ',
      'Báo cáo doanh thu theo thu ngân',
      'Phí dịch vụ',
      'Hình thức phục vụ',
      'Hoàn tiền',
      'Hủy đơn chưa thanh toán',
      'Hủy hoá đơn đã thanh toán',
      
    ],
  },
  {
    title: 'BÁO CÁO MẶT HÀNG',
    icon: 'cube',
    children: [
      'Danh mục mặt hàng',
      'Mặt hàng bán chạy',
      'Combo bán chạy',
      'Nhóm lựa chọn',
      'Mặt hàng đã hủy',
      'Combo đã hủy',
    ],
  },
  {
    title: 'BÁO CÁO KHO HÀNG',
    icon: 'archive',
    children: [
      'Tồn kho tổng hợp',
    ],
  },
  {
    title: 'BÁO CÁO TÀI CHÍNH',
    icon: 'cash',
    children: [
      'Kết quả kinh doanh',
      'Lợi nhuận theo mặt hàng',
      'Lợi nhuận theo Combo',
    ],
  },
  {
    title: 'BÁO CÁO KHUYẾN MẠI',
    icon: 'gift',
    children: [
      'Chương trình khuyến mãi',
      'Báo cáo chiết khấu',
    ],
  }
];

export default function ReportScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      {reportData.map((section, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.header} onPress={() => toggleExpand(index)}>
            <Ionicons name={section.icon} size={22} color="#007AFF" style={styles.icon} />
            <Text style={styles.headerText}>{section.title}</Text>
            <Ionicons
              name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#007AFF"
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>

          {expandedIndex === index && (
            <View style={styles.subList}>
              {section.children.map((item, subIndex) => (
                <TouchableOpacity key={subIndex} style={styles.subItem}>
                  <Text style={styles.subText}>{item}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  subList: {
    paddingLeft: 40,
    paddingVertical: 5,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  subText: {
    fontSize: 15,
    color: '#555',
  },
});