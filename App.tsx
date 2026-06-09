import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GirisEkrani from './src/screens/Futbol/Auth/GirisEkrani';
import KayitEkrani from './src/screens/Futbol/Auth/KayitEkrani';

import FutbolPage from './src/screens/Futbol/FutbolPage';
import HaberDetay from './src/screens/Futbol/HaberDetay';
import MacDetay from './src/screens/Futbol/MacDetay';

import BasketbolPage from './src/screens/Futbol/Basketbol/BasketbolPage';
import BasketbolHaberDetay from './src/screens/Futbol/Basketbol/BasketbolHaberDetay';

import BoksPage from './src/screens/Futbol/Boks/BoksPage';
import BoksHaberDetay from './src/screens/Futbol/Boks/BoksHaberDetay';

import Icon from 'react-native-vector-icons/MaterialIcons'; 

// Sayfa yönlendirmeleri için TypeScript Tipleri
type RootStackParamList = {
  Splash: undefined;
  Giris: undefined;
  Kayit: undefined;
  BransSecim: undefined;
  Futbol: undefined;
  Basketbol: undefined;
  Voleybol: undefined;
  Atletizm: undefined;
  Yelken: undefined;
  MasaTenisi: undefined;
  Boks: undefined;
  Kurek: undefined;
  Yuzme: undefined;
  HaberDetay: {haber : any};
  MacDetay: {mac : any};
  BoksHaberDetay: {haber : any};
  BasketbolHaberDetay: {haber : any};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Ekran genişliğini alıyoruz (Grid hesaplamaları için)
const { width } = Dimensions.get('window');

// ---------------------------------------------------------
// 1. AŞAMA: SPLASH EKRANI
// ---------------------------------------------------------
const SplashEkrani = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Giris');
    }, 3000);
    return () => clearTimeout(timer); // Temizlik
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/girisfoto1.png')}
        style={styles.backgroundImage}
      />
    </View>
  );
};


// ---------------------------------------------------------
// 3. AŞAMA: BRANŞ SEÇİM EKRANI
// ---------------------------------------------------------
const BransSecimEkrani = ({ navigation }: any) => {
  const branslar = [
    { ad: 'FUTBOL', ikon: 'sports-soccer', foto: require('./src/assets/brans_futbol.jpg'), route: 'Futbol' },
    { ad: 'BASKETBOL', ikon: 'sports-basketball', foto: require('./src/assets/brans_basketbol.jpg'), route: 'Basketbol' },
    { ad: 'VOLEYBOL', ikon: 'sports-volleyball', foto: require('./src/assets/brans_voleybol.jpg'), route: 'Voleybol' },
    { ad: 'ATLETİZM', ikon: 'directions-run', foto: require('./src/assets/brans_atletizm.jpg'), route: 'Atletizm' },
    { ad: 'YELKEN', ikon: 'directions-boat', foto: require('./src/assets/brans_yelken.jpg'), route: 'Yelken' },
    { ad: 'MASA TENİSİ', ikon: 'table-restaurant', foto: require('./src/assets/brans_masatenisi.jpg'), route: 'MasaTenisi' },
    { ad: 'BOKS', ikon: 'fitness-center', foto: require('./src/assets/brans_boks.jpg'), route: 'Boks' },
    { ad: 'KÜREK', ikon: 'kayaking', foto: require('./src/assets/brans_kurek.jpg'), route: 'Kurek' },
    { ad: 'YÜZME', ikon: 'pool', foto: require('./src/assets/brans_yuzme.jpg'), route: 'Yuzme' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.route)} // Tıklanan karta git
      style={styles.cardContainer}
    >
      <ImageBackground source={item.foto} style={styles.cardImage} imageStyle={{ borderRadius: 20 }}>
        <View style={styles.cardGradient}>
          <Icon name={item.ikon} size={35} color="#FEDD00" />
          <Text style={styles.cardText}>{item.ad}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/girisfoto1.png')} style={styles.backgroundImage} />
      <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.7)' }]} />

      <View style={styles.safeArea}>
        {/* Geri Dönüş Butonu */}
        {/* Geri Dönüş Butonu */}
        <View style={[styles.header, { zIndex: 10, elevation: 10 }]}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 20 }} 
            style={{ width: 50, height: 50, justifyContent: 'center', marginLeft: -5 }} 
          >
            <Icon name="arrow-back-ios" size={30} color="#FEDD00" />
          </TouchableOpacity>
        </View>

        <Text style={[styles.titleText, { letterSpacing: 2, marginBottom: 5 }]}>BRANŞLAR</Text>
        <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 20 }}>Lütfen bir branş seçiniz</Text>

        <FlatList
          data={branslar}
          numColumns={2}
          keyExtractor={(item) => item.ad}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
    </View>
  );
};

// ---------------------------------------------------------
// BOŞ BRANŞ SAYFALARI (Yapım Aşamasında)
// ---------------------------------------------------------
const PlaceholderPage = ({ baslik, navigation }: any) => (
  <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{baslik} Şubesi</Text>
    <Text style={{ color: 'gray', fontSize: 16, marginTop: 10 }}>Yapım Aşamasında...</Text>
    <TouchableOpacity 
      style={{ marginTop: 30, padding: 15, backgroundColor: '#002D5E', borderRadius: 10 }}
      onPress={() => navigation.goBack()}
    >
      <Text style={{ color: 'white' }}>Geri Dön</Text>
    </TouchableOpacity>
  </View>
);

//const BasketbolPage = ({ navigation }: any) => <PlaceholderPage baslik="Basketbol" navigation={navigation} />;
const VoleybolPage = ({ navigation }: any) => <PlaceholderPage baslik="Voleybol" navigation={navigation} />;
const AtletizmPage = ({ navigation }: any) => <PlaceholderPage baslik="Atletizm" navigation={navigation} />;
const YelkenPage = ({ navigation }: any) => <PlaceholderPage baslik="Yelken" navigation={navigation} />;
const MasaTenisiPage = ({ navigation }: any) => <PlaceholderPage baslik="Masa Tenisi" navigation={navigation} />;
// const BoksPage = ({ navigation }: any) => <PlaceholderPage baslik="Boks" navigation={navigation} />;
const KurekPage = ({ navigation }: any) => <PlaceholderPage baslik="Kürek" navigation={navigation} />;
const YuzmePage = ({ navigation }: any) => <PlaceholderPage baslik="Yüzme" navigation={navigation} />;



// ---------------------------------------------------------
// ANA UYGULAMA ÇATISI
// ---------------------------------------------------------,
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashEkrani} />
        <Stack.Screen name="Giris" component={GirisEkrani} />
        <Stack.Screen name="Kayit" component={KayitEkrani} />
        <Stack.Screen name="BransSecim" component={BransSecimEkrani} />
        
        {/* Branş Sayfaları */}
        <Stack.Screen name="Futbol" component={FutbolPage} />
        <Stack.Screen name="HaberDetay" component={HaberDetay} />
        <Stack.Screen name="MacDetay" component={MacDetay} />
        <Stack.Screen name="Basketbol" component={BasketbolPage} />
        <Stack.Screen name="BasketbolHaberDetay" component={BasketbolHaberDetay} />
        <Stack.Screen name="Voleybol" component={VoleybolPage} />
        <Stack.Screen name="Atletizm" component={AtletizmPage} />
        <Stack.Screen name="Yelken" component={YelkenPage} />
        <Stack.Screen name="MasaTenisi" component={MasaTenisiPage} />
        <Stack.Screen name="Boks" component={BoksPage} />
        <Stack.Screen name="BoksHaberDetay" component={BoksHaberDetay} />
        <Stack.Screen name="Kurek" component={KurekPage} />
        <Stack.Screen name="Yuzme" component={YuzmePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ---------------------------------------------------------
// STİL DOSYASI 
// ---------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  scrollCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  titleText: {
    color: '#FEDD00',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
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
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  // Kart Stilleri
  cardContainer: {
    width: (width - 50) / 2, // 2 sütun hesaplaması
    height: 150, // aspect ratio 1.2'ye yaklaşık bir değer
    marginBottom: 15,
    borderRadius: 20,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardGradient: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Basit gradyan niyetine
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  }
});