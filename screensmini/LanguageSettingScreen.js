import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../src/locales/i18n';

export default function LanguageSettingScreen() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  const saveLanguage = async () => {
    await AsyncStorage.setItem('language', selected);
    i18n.changeLanguage(selected);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('language_setting')}</Text>

      <TouchableOpacity style={styles.option} onPress={() => setSelected('vi')}>
        <Text style={styles.text}>{t('vietnamese')}</Text>
        <Image source={require('../assets/vn.png')} style={styles.flag} />
        <View style={[styles.radio, selected === 'vi' && styles.selected]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelected('en')}>
        <Text style={styles.text}>{t('english')}</Text>
        <Image source={require('../assets/uk.png')} style={styles.flag} />
        <View style={[styles.radio, selected === 'en' && styles.selected]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={saveLanguage}>
        <Text style={styles.saveText}>{t('save')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: { flex: 1, fontSize: 16 },
  flag: { width: 24, height: 16, marginRight: 10 },
  radio: {
    width: 18, height: 18, borderRadius: 9,
    borderWidth: 2, borderColor: '#007AFF',
  },
  selected: { backgroundColor: '#007AFF' },
  saveButton: {
    marginTop: 30, backgroundColor: '#007AFF',
    paddingVertical: 14, borderRadius: 8, alignItems: 'center',
  },
  saveText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
