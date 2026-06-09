import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

export default function GirisEkrani({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {
      // Sayfa her focus (odak) olduğunda buraları boşalt
      setEmail('');
      setPassword('');
    }, [])
  );

  const handleLogin = async () => {
    try {
      // 1. Kayıtlı kullanıcı listesini çek
      const savedData = await AsyncStorage.getItem('users_list');
      
      if (savedData) {
        const usersArray = JSON.parse(savedData);
        const trimmedEmail = email.trim();

        // 2. Listenin içinde bizim yazdığımız email ve şifreyle eşleşen birini bul
        const validUser = usersArray.find(
          (user: any) => user.email === trimmedEmail && user.password === password
        );

        if (validUser) {
          navigation.navigate('BransSecim');
        } else {
          Alert.alert("Hata", "E-posta veya şifre hatalı.");
        }
      } else {
        Alert.alert("Hata", "Sistemde henüz kayıtlı bir kullanıcı bulunamadı.");
      }
    } catch (e) {
      Alert.alert("Hata", "Giriş yapılamadı.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../../src/assets/girisfoto1.png')} style={styles.backgroundImage} />
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>12 NUMARA</Text>
        <View style={{ height: 80 }} />

        {/* Email Kutusu */}
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#FEDD00" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <View style={{ height: 15 }} />

        {/* Şifre Kutusu */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#FEDD00" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <View style={{ height: 30 }} />

        {/* Giriş Yap Butonu */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#002D5E' }]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, { color: 'white' }]}>GİRİŞ YAP</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />

        {/* Kayıt Ol Butonu */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FEDD00' }]}
          onPress={() => navigation.navigate('Kayit')}
        >
          <Text style={[styles.buttonText, { color: '#002D5E' }]}>KAYIT OL</Text>
        </TouchableOpacity>

        <View style={{ height: 10 }} />

        <TouchableOpacity>
          <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  backgroundImage: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
  contentContainer: { flex: 1, justifyContent: 'center', paddingHorizontal: 30, alignItems: 'center' },
  titleText: { color: '#FEDD00', fontSize: 28, fontWeight: 'bold' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 15, width: '100%', paddingHorizontal: 15, height: 55 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: 'white', fontSize: 16 },
  button: { width: '100%', height: 55, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});