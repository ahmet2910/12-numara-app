import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { FiksturDatabase, maclar } from '../../data/fikstur_db';

// --- DATA MODELLERİ ---
const haberlerListesi = [
  {
    id: '1',
    baslik: "Beşiktaş maçının Futbol Seremoni Paketleri satışa çıktı",
    icerik: "Ziraat Türkiye Kupası C Grubu ilk hafta maçında 23 Aralık Salı günü konuk edeceğimiz Beşiktaş maçının Futbol Seremoni Paketleri satışa çıktı...\n\nhttps://www.fenerbahce.org/taraftar/mac-oncesi-seremoni",
    foto: require('../../assets/haber1_foto.jpg'),
    tarih: "18 Aralık 2025 Perşembe 14:49",
    ekstraFotolar: [],
  },
  {
    id: '2',
    baslik: "Antrenmandan notlar",
    icerik: "Fenerbahçemiz, 20 Aralık Cumartesi günü hazırlıklarını sürdürdü...",
    foto: require('../../assets/haber2_foto.jpg'),
    tarih: "18 Aralık 2025 Perşembe 13:44",
    ekstraFotolar: [
      require('../../assets/haber2_ek1.jpg'), require('../../assets/haber2_ek2.jpg'),
      require('../../assets/haber2_ek3.jpg'), require('../../assets/haber2_ek4.jpg'),
      require('../../assets/haber2_ek5.jpg'), require('../../assets/haber2_ek6.jpg')
    ],
  },
  {
    id: '3',
    baslik: "İkas Eyüpspor maçının hazırlıkları başladı",
    icerik: "Fenerbahçemiz hazırlıklarına başladı...",
    foto: require('../../assets/haber3_foto.jpg'),
    tarih: "16 Aralık 2025 Salı 12:50",
    ekstraFotolar: [
      require('../../assets/haber3_ek1.jpg'), require('../../assets/haber3_ek2.jpg'),
      require('../../assets/haber3_ek3.jpg'), require('../../assets/haber3_ek4.jpg')
    ],
  },
  {
    id: '4',
    baslik: "Fenerbahçe 4-0 T. Konyaspor",
    icerik: "Fenerbahçemiz galip ayrıldı...",
    foto: require('../../assets/haber4_foto.jpg'),
    tarih: "15 Aralık 2025 Pazartesi 21:58",
    ekstraFotolar: [
      require('../../assets/haber4_ek1.jpg'), require('../../assets/haber4_ek2.jpg'),
      require('../../assets/haber4_ek3.jpg'), require('../../assets/haber4_ek4.jpg'),
      require('../../assets/haber4_ek5.jpg'), require('../../assets/haber4_ek6.jpg'),
      require('../../assets/haber4_ek7.jpg'), require('../../assets/haber4_ek8.jpg'),
      require('../../assets/haber4_ek9.jpg'), require('../../assets/haber4_ek10.jpg')
    ],
  },
];

const kadroListesi = [
  { isim: "Ederson Santana de Moraes", numara: "31", mevki: "Kaleci", foto: require('../../assets/ederson.png') },
  { isim: "Mert Günok", numara: "34", mevki: "Kaleci", foto: require('../../assets/gunok.png') },
  { isim: "Tarık Çetin", numara: "13", mevki: "Kaleci", foto: require('../../assets/tarik.png') },
  { isim: "Engin Can Biterge", numara: "39", mevki: "Kaleci", foto: require('../../assets/engin.png') },
  { isim: "Archie Brown", numara: "3", mevki: "Defans", foto: require('../../assets/archie.png') },
  { isim: "Çağlar Söyüncü", numara: "4", mevki: "Defans", foto: require('../../assets/caglar.png') },
  { isim: "Levent Mercan", numara: "22", mevki: "Defans", foto: require('../../assets/levent.png') },
  { isim: "Mert Müldür", numara: "18", mevki: "Defans", foto: require('../../assets/mertmuldur.png') },
  { isim: "Milan Skriniar", numara: "37", mevki: "Defans", foto: require('../../assets/milan.png') },
  { isim: "Nelson Semedo", numara: "27", mevki: "Defans", foto: require('../../assets/semedo.png') },
  { isim: "Yiğit Efe Demir", numara: "14", mevki: "Defans", foto: require('../../assets/yigitefe.png') },
  { isim: "Jayden Oosterwolde", numara: "24", mevki: "Defans", foto: require('../../assets/jayden.png') },
  { isim: "Abdou Aziz Fall", numara: "60", mevki: "Orta Saha", foto: require('../../assets/azizfall.png') },
  { isim: "Edson Alvarez", numara: "11", mevki: "Orta Saha", foto: require('../../assets/alvarez.png') },
  { isim: "Fred", numara: "7", mevki: "Orta Saha", foto: require('../../assets/fred.png') },
  { isim: "Marco Asensio", numara: "21", mevki: "Orta Saha", foto: require('../../assets/asensio.png') },
  { isim: "Mattéo Guendouzi", numara: "6", mevki: "Orta Saha", foto: require('../../assets/default.png') },
  { isim: "İsmail Yüksek", numara: "5", mevki: "Orta Saha", foto: require('../../assets/ismail.png') },
  { isim: "Mert Hakan Yandaş", numara: "8", mevki: "Orta Saha", foto: require('../../assets/mhyhakan.png') },
  { isim: "Oğuz Aydın", numara: "70", mevki: "Orta Saha", foto: require('../../assets/oguz.png') },
  { isim: "Anthony Musaba", numara: "20", mevki: "Orta Saha", foto: require('../../assets/default.png') },
  { isim: "Anderson Talisca", numara: "94", mevki: "Orta Saha", foto: require('../../assets/talisca.png') },
  { isim: "Dorgeles Nene", numara: "45", mevki: "Forvet", foto: require('../../assets/nene.png') },
  { isim: "Jhon Duran", numara: "10", mevki: "Forvet", foto: require('../../assets/duran.png') },
  { isim: "Kerem Aktürkoğlu", numara: "9", mevki: "Forvet", foto: require('../../assets/kerem.png') },
  { isim: "Youssef En-Nesyri", numara: "19", mevki: "Forvet", foto: require('../../assets/ennesyri.png') },
];

export default function FutbolPage() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState(0);

  // --- HABERLER SEKME İÇERİĞİ ---
  const HaberlerTab = () => (
    <FlatList
      data={haberlerListesi}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.tabContent}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.haberCard} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HaberDetay', { haber: item })}
        >
          <Image source={item.foto} style={styles.haberImage} />
          <View style={styles.haberTextContainer}>
            <Text style={styles.haberTarih}>{item.tarih}</Text>
            <Text style={styles.haberBaslik} numberOfLines={2}>{item.baslik}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );

  // --- SPORCULAR SEKME İÇERİĞİ ---
  const SporcularTab = () => {
    const mevkiler = ["Kaleci", "Defans", "Orta Saha", "Forvet"];
    return (
      <ScrollView contentContainerStyle={styles.tabContent}>
        {mevkiler.map((mevki) => {
          const mevkiOyunculari = kadroListesi.filter(o => o.mevki === mevki);
          return (
            <View key={mevki} style={{ marginBottom: 20 }}>
              <View style={styles.mevkiHeader}>
                <Text style={styles.mevkiHeaderText}>{mevki.toUpperCase()}</Text>
              </View>
              <View style={styles.oyuncuGrid}>
                {mevkiOyunculari.map((oyuncu, index) => (
                  <View key={index} style={styles.oyuncuCard}>
                    <Image source={oyuncu.foto} style={styles.oyuncuImage} />
                    <Text style={styles.oyuncuIsim} numberOfLines={2}>{oyuncu.isim}</Text>
                    <View style={styles.oyuncuNumaraBadge}>
                      <Text style={styles.oyuncuNumaraText}>#{oyuncu.numara}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

// --- FİKSTÜR SEKME İÇERİĞİ ---
  const FiksturTab = () => {
    // Kategorileri veriden dinamik çıkart
    const kategoriler = Array.from(new Set(maclar.map(m => m.kategori)));

    return (
      <ScrollView contentContainerStyle={styles.tabContent}>
        {kategoriler.map((kategoriAdi, index) => {
          const kategoriMaclari = maclar.filter(m => m.kategori === kategoriAdi);
          const haftalar = Array.from(new Set(kategoriMaclari.map(m => m.hafta)));

          return (
            <View key={index} style={{ marginBottom: 20 }}>
              <View style={styles.kategoriHeader}>
                <Text style={styles.kategoriHeaderText}>{kategoriAdi.toUpperCase()}</Text>
              </View>
              
              {haftalar.map((haftaAdi, hIndex) => {
                const haftaMaclari = kategoriMaclari.filter(m => m.hafta === haftaAdi);
                return (
                  <View key={hIndex}>
                    <Text style={styles.haftaText}>{haftaAdi}</Text>
                    {haftaMaclari.map((mac) => (
                      <TouchableOpacity 
                        key={mac.id} 
                        style={styles.macCard}
                        onPress={() => navigation.navigate('MacDetay', { mac, brans: 'futbol' })}
                      >
                        <Text style={styles.takimText}>{mac.evSahibi}</Text>
                        <View style={{ alignItems: 'center', width: 80 }}>
                          <Text style={styles.skorText}>{mac.skor}</Text>
                          <Text style={styles.tarihSaatText}>{mac.saat}</Text>
                          <Text style={styles.tarihSaatText}>{mac.tarih}</Text>
                        </View>
                        <Text style={styles.takimText}>{mac.deplasman}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  };

  // --- PUAN DURUMU SEKME İÇERİĞİ ---
  const PuanDurumuTab = () => {
    const [seciliLig, setSeciliLig] = useState('Trendyol Süper Lig');
    const [puanVerisi, setPuanVerisi] = useState<any[]>([]);

    React.useEffect(() => {
      FiksturDatabase.puanDurumuGetir(seciliLig).then(data => setPuanVerisi(data));
    }, [seciliLig]);

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.ligSecici}>
          <TouchableOpacity onPress={() => setSeciliLig('Trendyol Süper Lig')} style={[styles.ligButon, seciliLig === 'Trendyol Süper Lig' && styles.ligButonAktif]}>
            <Text style={[styles.ligButonText, seciliLig === 'Trendyol Süper Lig' && styles.ligButonTextAktif]}>SÜPER LİG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSeciliLig('Avrupa Ligi')} style={[styles.ligButon, seciliLig === 'Avrupa Ligi' && styles.ligButonAktif]}>
            <Text style={[styles.ligButonText, seciliLig === 'Avrupa Ligi' && styles.ligButonTextAktif]}>AVRUPA LİGİ</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.tabContent}>
          <View style={styles.puanTablosuRow}>
            <Text style={[styles.puanTabloBaslik, { width: 20 }]}>Sıra</Text>
            <Text style={[styles.puanTabloBaslik, { flex: 1 }]}>Takımlar</Text>
            <Text style={styles.puanTabloBaslik}>O</Text>
            <Text style={styles.puanTabloBaslik}>G</Text>
            <Text style={styles.puanTabloBaslik}>B</Text>
            <Text style={styles.puanTabloBaslik}>M</Text>
            <Text style={styles.puanTabloBaslik}>Av</Text>
            <Text style={styles.puanTabloBaslik}>P</Text>
          </View>
          
          {puanVerisi.map((takim, index) => {
            const isFener = takim.takim.toUpperCase().includes("FENERBAHÇE");
            return (
              <View key={index} style={[styles.puanTablosuRow, isFener && { backgroundColor: 'rgba(254, 221, 0, 0.15)' }]}>
                <Text style={[styles.puanTabloHucre, { width: 20 }]}>{index + 1}</Text>
                <Text style={[styles.puanTabloHucre, { flex: 1, fontWeight: isFener ? 'bold' : 'normal' }]}>{takim.takim}</Text>
                <Text style={styles.puanTabloHucre}>{takim.oynanan}</Text>
                <Text style={styles.puanTabloHucre}>{takim.galibiyet}</Text>
                <Text style={styles.puanTabloHucre}>{takim.beraberlik}</Text>
                <Text style={styles.puanTabloHucre}>{takim.maglubiyet}</Text>
                <Text style={styles.puanTabloHucre}>{takim.averaj}</Text>
                <Text style={[styles.puanTabloHucre, { color: '#FEDD00', fontWeight: 'bold' }]}>{takim.puan}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <Icon name="arrow-back-ios" size={24} color="#FEDD00" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>FUTBOL</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* TabBar */}
      <View style={styles.tabBar}>
        {[
          { icon: 'newspaper', text: 'Haberler' },
          { icon: 'calendar-month', text: 'Fikstür' },
          { icon: 'leaderboard', text: 'Puan' },
          { icon: 'groups', text: 'Kadro' }
        ].map((tab, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.tabButton, activeTab === index && styles.activeTabButton]}
            onPress={() => setActiveTab(index)}
          >
            <Icon name={tab.icon} size={20} color={activeTab === index ? '#FEDD00' : 'rgba(255,255,255,0.6)'} />
            <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>{tab.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Views */}
      {/* Tab Views */}
      <View style={{ flex: 1 }}>
        {activeTab === 0 && <HaberlerTab />}
        {activeTab === 1 && <FiksturTab />}
        {activeTab === 2 && <PuanDurumuTab />}
        {activeTab === 3 && <SporcularTab />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001430' },
  appBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 50, paddingBottom: 15, backgroundColor: '#001430' },
  appBarTitle: { color: '#FEDD00', fontSize: 20, fontWeight: 'bold' },
  tabBar: { flexDirection: 'row', backgroundColor: '#001430', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  tabButton: { flex: 1, alignItems: 'center', paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTabButton: { borderBottomColor: '#FEDD00' },
  tabText: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 4, fontWeight: '600' },
  activeTabText: { color: '#FEDD00' },
  tabContent: { padding: 15 },
  
  // Haberler Stilleri
  haberCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  haberImage: { width: '100%', height: 200, resizeMode: 'cover' },
  haberTextContainer: { padding: 15 },
  haberTarih: { color: '#FEDD00', fontSize: 12, marginBottom: 5 },
  haberBaslik: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  // Sporcular Stilleri
  mevkiHeader: { backgroundColor: '#FEDD00', padding: 10, borderRadius: 10, marginBottom: 15 },
  mevkiHeaderText: { color: '#001430', fontWeight: 'bold', fontSize: 16 },
  oyuncuGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  oyuncuCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 15, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  oyuncuImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#001430', marginBottom: 10 },
  oyuncuIsim: { color: 'white', fontWeight: 'bold', fontSize: 13, textAlign: 'center', marginBottom: 8, minHeight: 35 },
  oyuncuNumaraBadge: { backgroundColor: '#FEDD00', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  oyuncuNumaraText: { color: '#001430', fontWeight: 'bold', fontSize: 12 },

  // Placeholder Stilleri
  emptyTab: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyTabText: { color: 'white', fontSize: 18, marginTop: 15, fontWeight: 'bold' },
  emptyTabSubText: { color: 'gray', fontSize: 14, marginTop: 5 },

  // Fikstür Stilleri
  kategoriHeader: { backgroundColor: '#FEDD00', padding: 8, borderRadius: 5, marginBottom: 10 },
  kategoriHeaderText: { color: '#001430', fontWeight: 'bold', fontSize: 14 },
  haftaText: { color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 5, marginBottom: 10 },
  macCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'space-between' },
  takimText: { flex: 1, color: 'white', fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  skorText: { color: '#FEDD00', fontSize: 22, fontWeight: 'bold' },
  tarihSaatText: { color: '#FEDD00', fontSize: 11 },

  // Puan Durumu Stilleri
  ligSecici: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  ligButon: { flex: 1, padding: 15, alignItems: 'center' },
  ligButonAktif: { borderBottomWidth: 2, borderBottomColor: '#FEDD00' },
  ligButonText: { color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' },
  ligButonTextAktif: { color: '#FEDD00' },
  puanTablosuRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)', alignItems: 'center' },
  puanTabloBaslik: { color: '#FEDD00', fontSize: 11, fontWeight: 'bold', width: 25, textAlign: 'center' },
  puanTabloHucre: { color: 'white', fontSize: 11, width: 25, textAlign: 'center' },
});