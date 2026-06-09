import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FiksturDatabase } from '../../data/fikstur_db';
import { basketbolOlaylar } from '../../data/basketbol_fikstur_db';

export default function MacDetay({ route, navigation }: any) {
  // FutbolPage veya BasketbolPage'den tıkladığımız maçın verilerini alıyoruz.
  // Eğer brans belirtilmemişse varsayılan olarak 'futbol' kabul ediyoruz.
  const { mac, brans = 'futbol' } = route.params;

  const isBasketbol = brans === 'basketbol';

  // State'ler
  const [havaDurumu, setHavaDurumu] = useState<any>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [olaylar, setOlaylar] = useState<any[]>([]); // Goller veya basketbol istatistikleri

  useEffect(() => {
    // 1. HAVA DURUMU API ÇAĞRISI
    const fetchWeather = async () => {
      try {
        const apiKey = "a4c6725fbe5af4df6fb63e8801e40190";
        // Şehir ismini temizle (Örn: "İstanbul (Ülker SSS)" -> "İstanbul")
        const temizSehir = mac.sehir ? mac.sehir.split('(')[0].trim() : "Istanbul";
        const city = encodeURIComponent(temizSehir);
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=tr`;
        
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setHavaDurumu(data);
        }
      } catch (error) {
        console.log("Hava durumu çekilemedi:", error);
      } finally {
        setLoadingWeather(false);
      }
    };

    // 2. GOLLERİ VEYA İSTATİSTİKLERİ GETİR
    const fetchOlaylar = async () => {
      try {
        if (!isBasketbol) {
          const data = await FiksturDatabase.golleriGetir(mac.id);
          setOlaylar(data || []);
        } else {
          // BURA ÇOK KRİTİK: Konsola yazdırıp sorunu görelim
          console.log("TIKLANAN MAÇ ID:", mac.id);
          console.log("TÜM BASKETBOL OLAYLARI:", basketbolOlaylar);
          
          const data = (basketbolOlaylar || []).filter(o => String(o.macId) === String(mac.id));
          setOlaylar(data);
        }
      } catch (error) {
        console.log("HATA ÇIKTI:", error);
        setOlaylar([]);
      }
    };

    fetchWeather();
    fetchOlaylar();
  }, [mac.sehir, mac.id, brans]);

  return (
    <View style={styles.container}>
      {/* Şeffaf Üst Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <Icon name="arrow-back-ios" size={24} color="#FEDD00" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>MAÇ DETAYI</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* 1. SKOR TABELASI */}
        <View style={styles.skorTabelasi}>
          <Text style={styles.takimIsim}>{mac.evSahibi}</Text>
          <View style={styles.skorBadge}>
            <Text style={styles.skorText}>
              {mac.skor === " - " ? "VS" : mac.skor}
            </Text>
          </View>
          <Text style={styles.takimIsim}>{mac.deplasman}</Text>
        </View>

        {/* 2. HAVA DURUMU (API) */}
        {loadingWeather ? (
          <ActivityIndicator size="small" color="#FEDD00" style={{ marginVertical: 15 }} />
        ) : havaDurumu ? (
          <View style={styles.havaDurumuKutu}>
            <Icon name="wb-cloudy" size={20} color="rgba(255,255,255,0.7)" />
            <Text style={styles.havaDurumuText}>
              {mac.sehir?.split('(')[0].trim()} Maç Günü: {Math.round(havaDurumu.main.temp)}°C, {havaDurumu.weather[0].description.toUpperCase()}
            </Text>
          </View>
        ) : null}

        <View style={{ height: 20 }} />

        {/* 3. MAÇ BİLGİLERİ (TARİH, SAAT, ŞEHİR) */}
        <View style={styles.bilgiSatiri}>
          <Icon name="calendar-today" size={24} color="#FEDD00" />
          <View style={styles.bilgiTextKutu}>
            <Text style={styles.bilgiBaslik}>Tarih ve Saat</Text>
            <Text style={styles.bilgiDeger}>{mac.tarih} - {mac.saat}</Text>
          </View>
        </View>

        <View style={styles.bilgiSatiri}>
          <Icon name="location-on" size={24} color="#FEDD00" />
          <View style={styles.bilgiTextKutu}>
            {/* Dinamik Başlık: Basketbolsa Salon, Futbolsa Stadyum */}
            <Text style={styles.bilgiBaslik}>{isBasketbol ? "Salon / Şehir" : "Stadyum / Şehir"}</Text>
            <Text style={styles.bilgiDeger}>{mac.sehir}</Text>
          </View>
        </View>

        <View style={styles.ayirici} />

        {/* 4. GOL / DETAY BİLGİLERİ */}
        <View style={{ paddingHorizontal: 20 }}>
          {/* Dinamik Başlık */}
          <Text style={styles.golBaslik}>{isBasketbol ? "İSTATİSTİKLER" : "GOL BİLGİLERİ"}</Text>
          <View style={{ height: 10 }} />

          {olaylar.length === 0 ? (
            <Text style={styles.golYokText}>
              {isBasketbol 
                ? "Bu maç için istatistik verisi bulunamadı." 
                : "Gol verisi bulunamadı veya maç henüz oynanmadı."}
            </Text>
          ) : (
            olaylar.map((olay, index) => (
              <View key={index} style={styles.golSatiri}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                  {/* Dinamik İkon: Basketbolsa basket topu, Futbolsa futbol topu */}
                  <Icon name={isBasketbol ? "sports-basketball" : "sports-soccer"} size={20} color="white" />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.golOyuncu}>{olay.oyuncu}</Text>
                    <Text style={styles.golTakim}>{olay.takim}</Text>
                  </View>
                </View>
                {/* 🔥 GÜNCELLENEN KISIM: Basketbolsa istatistiği, futbolsa dakikayı (') gösterir */}
                <Text style={styles.golDakika}>
                  {isBasketbol ? olay.istatistik : olay.dakika + "'"}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001430' },
  appBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 50, paddingBottom: 15, backgroundColor: 'transparent' },
  appBarTitle: { color: '#FEDD00', fontSize: 18, fontWeight: 'bold' },
  
  skorTabelasi: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 15, paddingVertical: 30, paddingHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  takimIsim: { flex: 1, color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  skorBadge: { backgroundColor: '#FEDD00', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, marginHorizontal: 10 },
  skorText: { color: '#001430', fontSize: 24, fontWeight: 'bold' },

  havaDurumuKutu: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, padding: 15, backgroundColor: 'rgba(33, 150, 243, 0.2)', borderRadius: 15 },
  havaDurumuText: { color: 'white', fontSize: 14, marginLeft: 10 },

  bilgiSatiri: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
  bilgiTextKutu: { marginLeft: 20 },
  bilgiBaslik: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  bilgiDeger: { color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 3 },

  ayirici: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginHorizontal: 20, marginVertical: 20 },

  golBaslik: { color: '#FEDD00', fontWeight: 'bold', fontSize: 16 },
  golYokText: { color: 'rgba(255,255,255,0.4)', marginTop: 10, fontStyle: 'italic' },
  golSatiri: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  golOyuncu: { color: 'white', fontSize: 15 },
  golTakim: { color: 'rgba(255,255,255,0.38)', fontSize: 10, marginTop: 2 },
  golDakika: { color: '#FEDD00', fontWeight: 'bold', fontSize: 12 },
});