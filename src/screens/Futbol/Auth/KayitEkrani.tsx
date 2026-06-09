import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';


const KayitInput = ({ label, icon, secure, value, onChangeText }: { label: string, icon: string, secure?: boolean, value: string, onChangeText: (text: string) => void }) => (
  <View style={[styles.inputContainer, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
    <Icon name={icon} size={24} color="#FEDD00" style={styles.inputIcon} />
    <TextInput
      style={styles.input}
      placeholder={label}
      placeholderTextColor="rgba(255,255,255,0.6)"
      secureTextEntry={secure}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  </View>
);

export default function KayitEkrani({ navigation }: any) {
  const [adSoyad, setAdSoyad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = async () => {
    if (!adSoyad || !email || !password || !passwordConfirm) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("Hata", "Şifreler birbiriyle eşleşmiyor.");
      return;
    }

    try {
      const newUser = { adSoyad, email: email.trim(), password };
      
      // 1. AsyncStorage'dan eski listeyi çek
      const existingUsers = await AsyncStorage.getItem('users_list');
      
      // 2. Eğer liste varsa JSON yap, yoksa boş bir dizi [] oluştur
      let usersArray = existingUsers ? JSON.parse(existingUsers) : [];

      // 3. (Ekstra Güvenlik) Bu email daha önce kullanılmış mı kontrol et
      const emailExists = usersArray.some((user: any) => user.email === newUser.email);
      if (emailExists) {
        Alert.alert("Hata", "Bu e-posta adresi zaten kullanımda!");
        return;
      }

      // 4. Yeni kullanıcıyı listeye ekle
      usersArray.push(newUser);

      // 5. Listeyi tekrar telefona kaydet
      await AsyncStorage.setItem('users_list', JSON.stringify(usersArray));
      
      Alert.alert("Başarılı", "Sarı Lacivert ailemize hoş geldin! Şimdi giriş yapabilirsin.");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Hata", "Kayıt olurken bir sorun oluştu.");
    }
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Image source={require('../../../../src/assets/girisfoto1.png')} style={styles.backgroundImage} />
      <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.7)' }]} />

      <ScrollView contentContainerStyle={styles.scrollCenter}>
        <Text style={[styles.titleText, { fontSize: 26, letterSpacing: 1.5 }]}>SARI LACİVERTE KATIL</Text>
        <View style={{ height: 40 }} />

        <KayitInput label="Ad Soyad" icon="person" value={adSoyad} onChangeText={setAdSoyad} />
        <View style={{ height: 15 }} />
        
        <KayitInput label="E-posta" icon="email" value={email} onChangeText={setEmail} />
        <View style={{ height: 15 }} />
        
        <KayitInput label="Şifre" icon="lock" secure={true} value={password} onChangeText={setPassword} />
        <View style={{ height: 15 }} />
        
        <KayitInput label="Şifre Tekrar" icon="lock-outline" secure={true} value={passwordConfirm} onChangeText={setPasswordConfirm} />
        
        <View style={{ height: 30 }} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FEDD00' }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: '#002D5E' }]}>KAYDI TAMAMLA</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Zaten üye misin? Giriş Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001430', // 🔥 FIX: Klavye açılınca arkadan beyazlık fırlamasın diye burayı koyu lacivert yaptık.
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  scrollCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  titleText: {
    color: '#FEDD00',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    paddingHorizontal: 15,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});