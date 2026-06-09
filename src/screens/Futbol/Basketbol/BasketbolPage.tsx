import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { basketbolPuanDurumu, basketbolFikstur } from '../../../data/basketbol_fikstur_db'; 

// --- HABERLER DATA (İçerikleri Sen Doldur) ---
const haberlerListesi = [
  {
    id: '1',
    baslik: "Fenerbahçe Beko, Türkiye Sigorta Basketbol Süper Ligi Playoff Yarı Final serisi dördüncü maçında parkeye çıkıyor",
    icerik: `Fenerbahçe Beko Erkek Basketbol Takımımız, Türkiye Sigorta Basketbol Süper Ligi Playoff Yarı Final serisi dördüncü maçında Anadolu Efes’e konuk oluyor. 7 Haziran Pazar günü (yarın) Turkcell Basketbol Gelişim Merkezi’nde oynanacak mücadele saat 20.00’de başlayacak ve beIN Sports’tan canlı yayınlanacak. Mücadeleyi Kerem Baki, Ziya Özorhon ve Tolga Akkuşoğlu hakem üçlüsü yönetecek. Fenerbahçe Beko’nun seride 2-1’lik üstünlüğü bulunuyor. Takımımız maçı kazanması halinde finale yükselecek.
    
**Fenerbahçe Beko’da son durum**
    
Fenerbahçe Beko Erkek Basketbol Takımımız, Türkiye Sigorta Basketbol Süper Ligi Playoff yarı final serisi ilk iki maçında Ülker Spor ve Etkinlik Salonu’nda konuk ettiği Anadolu Efes’i 60-59 ve 73-72’lik skorlarla mağlup ederek seride 2-0’lık üstünlük sağladı. Turkcell Basketbol Gelişim Salonu’nda oynanan serinin üçüncü maçında ise Anadolu Efes’e 102-93’lük skorla mağlup olan Fenerbahçe Beko’da Tarık Biberovic 29, Wade Baldwin IV 24, Talen Horton-Tucker 14 ve Mikael Jantunen 10 sayı üretti.
    
Oyuncumuz Nando De Colo, hastalığı sebebiyle Anadolu Efes karşısında forma giyemeyecek.

**Anadolu Efes’te son durum**

Yarı Final serisi üçüncü maçında konuk ettiği Fenerbahçe Beko Erkek Basketbol Takımımızı 102-93’lük skorla mağlup eden Anadolu Efes’te Shane Larkin 31, Jordan Loyd 23 ve Pj Dozier 15 sayı üretti.

Antrenör Pablo Laso tarafından çalıştırılan Anadolu Efes’in kadrosunda şu oyuncular yer alıyor;

Guardlar: Shane Larkin, Rodrigue Beaubois, Şehmus Hazer, Jordan Loyd, Saben Lee, Rüzgar Fenemen, Nick Weiler-Babb, Isaia Cordinier, P.J. Dozier, David Mutaf
 
Forvetler: Roland Smits, Darius Karutasu, Burak Can Yıldızlı, Cole Swider, Ercan Osmani, Erkan Yılmaz
 
Pivotlar: Kai Jones, Vincent Poirier, Brice Dessert, Georgios Papagiannis

Takım İstatistikleri (Fenerbahçe Beko - Anadolu Efes)
 
Sayı: 87.03 - 92.73
Ribaund: 32.43 - 34.18
Asist: 19.97 - 20.52
Top çalma: 7.31 - 6.73
Blok: 3.37 - 2.42
İki sayı: %59.5 - %54.7
Üç sayı: %36.3 - %39.6
Serbest atış: %77.7 - %77.3

İstatistik Liderleri (Fenerbahçe Beko - Anadolu Efes)
 
Sayı: Shane Larkin 14.08 - 13.31 Talen Horton-Tucker
Ribaund: Vincent Poirier 6.17 - 5.04 Nicolo Melli
Asist: Shane Larkin 5.58 - 4.96 Wade Baldwin
Top çalma: Shane Larkin 1.58 - 1.19 Talen Horton-Tucker
Blok: Bric Dessert 1.24 - 0.95 Armando Bacot
Verimlilik: Vincent Poirier 196 - 343 Talen Horton-Tucker`,
    foto: require('../../../assets/basketbol_haber1.jpg'),
    tarih: "06 Haziran 2026 Cumartesi 19:54",
  },
  {
    id: '2',
    baslik: "Başantrenörümüz Sarunas Jasikevicius, Anadolu Efes maçını değerlendirdi",
    icerik: `Başantrenörümüz Sarunas Jasikevicius, deplasmanda Anadolu Efes’e 102-93 mağlup olarak seride durumun 2-1’e geldiği Türkiye Sigorta Basketbol Süper Ligi play-off yarı final serisi üçüncü maçının ardından Fenerbahçe Televizyonu’na şu açıklamalarda bulundu:

“Onların kazanmak zorunda olduğunu biliyorduk. Aslında maçın başında bize göre daha fiziksellerdi. Bu fizikselliğe cevap vermemiz biraz uzun sürdü. Tabii ki onların çok basit sayılarına da izin verdik. Kesinlikle daha iyi bir iş çıkarmalıydık.”`,
    foto: require('../../../assets/basketbol_haber2.jpeg'),
    tarih: "05 Haziran 2026 Cuma 23:07",
  },
  {
    id: '3',
    baslik: "Seride durum 2-1’e geldi",
    icerik: `Fenerbahçe Beko Erkek Basketbol Takımımız, Türkiye Sigorta Basketbol Süper Ligi play-off yarı final serisi üçüncü maçında Anadolu Efes’e konuk oldu.

Ekibimiz, Turkcell Basketbol Gelişim Merkezi’nde oynanan müsabakadan 102-93 mağlup ayrıldı ve seride durum 2-1’e geldi.

Üç galibiyete ulaşan ekibin adını finale yazdıracağı Türkiye Sigorta Basketbol Süper Ligi play-off yarı final serisinin dördüncü maçı 7 Haziran Pazar günü saat 20.00’de yine Turkcell Basketbol Gelişim Merkezi’nde oynanacak.

Mücadeleyi Başkanımız Sadettin Saran ve Yönetim Kurulu Üyelerimiz de takip etti.

Devon Hall, Talen Horton-Tucker, Tarık Biberovic, Nicolo Melli ve Khem Birch ilk beşiyle maça başlayan Fenerbahçe Beko, Tarık’tan gelen üst üste üç üçlük isabetiyle 9-0 öne geçti ve rakibine erken bir mola aldırdı. Mola dönüşü oyuna ortak olan ev sahibi ekip, ilk çeyreği 29-26 önde bitirdi. İkinci yarının ilk 5 dakikasına iyi bir başlangıç yapan Ekibimiz, THT, Zagars ve Devon’un sayılarıyla 41-38 öne geçti. Kalan bölümlerde de Wade Baldwin’den sayı katkısı alan Fenerbahçe Beko, soyunma odasına 50-49 önde gitti.

İkinci yarıya da Tarık’ın sayılarıyla başlayan Takımımız, 55-53 üstünlüğünü sürdürdü. Ekibimize Ercan Osmani ve PJ Dozier ile cevap veren Anadolu Efes, 59-58 öne geçti ve Fenerbahçe Beko molaya gitti. Mola dönüşü iyi oyununa devam eden ev sahibi ekip, karar çeyreğine 76-67 üstün girdi. Dördüncü çeyreğin ilk bölümlerinde ise Baldwin ve Tarık’ın sayılarıyla oyuna ortak olan Fenerbahçemiz farkı 5’e indirdi: 86-81. Kalan bölümlerde skor avantajını sürdüren Anadolu Efes, parkeden 102-93 galip ayrıldı.

**Çeyrek skorları:**

1. Çeyrek: 29-26
2. Çeyrek: 20-24
3. Çeyrek: 27-17
4. Çeyrek: 26-26

**Skor dağılımımız:** Biberovic 29, Baldwin 24, Horton-Tucker 14, Jantunen 10, Hall 7, Melih 4, Zagars 2, Melli 2, Birch 1.`,
    foto: require('../../../assets/basketbol_haber3.jpeg'), 
    tarih: "05 Haziran 2026 Cuma 22:27",
    ekstraFotolar: [
      require('../../../assets/basketbol_haber3_ek1.jpeg'), require('../../../assets/basketbol_haber3_ek2.jpeg'),
      require('../../../assets/basketbol_haber3_ek3.jpeg'), require('../../../assets/basketbol_haber3_ek4.jpeg'),
      require('../../../assets/basketbol_haber3_ek5.jpeg'), require('../../../assets/basketbol_haber3_ek6.jpeg'),
      require('../../../assets/basketbol_haber3_ek7.jpeg'), require('../../../assets/basketbol_haber3_ek8.jpeg'),
      require('../../../assets/basketbol_haber3_ek9.jpeg'), require('../../../assets/basketbol_haber3_ek10.jpeg'),

    ],
  },
];

const basketbolKadro = [
  { id: '1', isim: 'Arturs Zagars', mevki: 'Oyun Kurucu', formaNo: '32', foto: require('../../../assets/zagars.png') },
  { id: '2', isim: 'Devon Hall', mevki: 'Oyun Kurucu', formaNo: '20', foto: require('../../../assets/devonhall.png') },
  { id: '3', isim: 'Brandon Boston Jr', mevki: 'Şutör Gard', formaNo: '11', foto: require('../../../assets/brondon.png') },
  { id: '4', isim: 'Melih Mahmutoğlu', mevki: 'Şutör Gard', formaNo: '10', foto: require('../../../assets/melihmah.png') },
  { id: '5', isim: 'Mert Emre Ekşioğlu', mevki: 'Şutör Gard', formaNo: '5', foto: require('../../../assets/emre.png') },
  { id: '6', isim: 'Nando De Colo', mevki: 'Şutör Gard', formaNo: '12', foto: require('../../../assets/decolo.png') },
  { id: '7', isim: 'Talen Horton-Tucker', mevki: 'Şutör Gard', formaNo: '8', foto: require('../../../assets/tucker.png') },
  { id: '8', isim: 'Wade Baldwin IV', mevki: 'Şutör Gard', formaNo: '2', foto: require('../../../assets/wade.png') },
  { id: '9', isim: 'Bonzie Alexander Colson', mevki: 'Kısa Forvet', formaNo: '50', foto: require('../../../assets/bonzie.png') },
  { id: '10', isim: 'Onuralp Bitim', mevki: 'Kısa Forvet', formaNo: '17', foto: require('../../../assets/onuralp.png') },
  { id: '11', isim: 'Tarık Biberovic', mevki: 'Kısa Forvet', formaNo: '13', foto: require('../../../assets/tarikbiber.png') },
  { id: '12', isim: 'Mikael Jantunen', mevki: 'Uzun Forvet', formaNo: '18', foto: require('../../../assets/jantunen.png') },
  { id: '13', isim: 'Metecan Birsen', mevki: 'Uzun Forvet', formaNo: '1', foto: require('../../../assets/metecan.png') },
  { id: '14', isim: 'Nicolo Melli', mevki: 'Pivot', formaNo: '4', foto: require('../../../assets/melli.png') },
  { id: '15', isim: 'Yiğit Hamza Mestoğlu', mevki: 'Uzun Forvet', formaNo: '22', foto: require('../../../assets/default.png') },
  { id: '16', isim: 'Armando Bacot', mevki: 'Pivot', formaNo: '00', foto: require('../../../assets/bacot.png') },
  { id: '17', isim: 'Chris Silva', mevki: 'Pivot', formaNo: '30', foto: require('../../../assets/chris.png') },
  { id: '18', isim: 'Jilson Bango', mevki: 'Pivot', formaNo: '44', foto: require('../../../assets/default.png') },
  { id: '19', isim: 'Khem Birch', mevki: 'Pivot', formaNo: '92', foto: require('../../../assets/birch.png') }
];

export default function BasketbolPage() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState(0);
  
  const HaberlerTab = () => (
    <FlatList
      data={haberlerListesi}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 15 }}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.haberCard} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BasketbolHaberDetay', { haber: item })}
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

  const SporcularTab = () => {
    // Basketbol mevkilerini sırasıyla yazdık
    const mevkiler = ["Oyun Kurucu", "Şutör Gard", "Kısa Forvet", "Uzun Forvet", "Pivot"];
    
    return (
      <ScrollView contentContainerStyle={styles.tabContent}>
        {mevkiler.map((mevki) => {
          const mevkiOyunculari = basketbolKadro.filter(o => o.mevki === mevki);
          
          // Eğer o mevkide oyuncu yoksa o başlığı hiç çizme
          if (mevkiOyunculari.length === 0) return null;

          return (
            <View key={mevki} style={{ marginBottom: 20 }}>
              {/* Mevki Başlığı */}
              <View style={styles.mevkiHeader}>
                <Text style={styles.mevkiHeaderText}>{mevki.toUpperCase()}</Text>
              </View>
              
              {/* Oyuncuların Grid (Yan Yana) Dizilimi */}
              <View style={styles.oyuncuGrid}>
                {mevkiOyunculari.map((oyuncu, index) => (
                  <View key={index} style={styles.oyuncuCard}>
                    <Image source={oyuncu.foto} style={styles.oyuncuImage} />
                    <Text style={styles.oyuncuIsim} numberOfLines={2}>{oyuncu.isim}</Text>
                    <View style={styles.oyuncuNumaraBadge}>
                      <Text style={styles.oyuncuNumaraText}>#{oyuncu.formaNo}</Text>
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
    // Kategorileri (Süper Lig, EuroLeague vs.) veriden dinamik çıkart
    const kategoriler = Array.from(new Set(basketbolFikstur.map(m => m.kategori)));

    return (
      <ScrollView contentContainerStyle={styles.tabContent}>
        {kategoriler.map((kategoriAdi, index) => {
          const kategoriMaclari = basketbolFikstur.filter(m => m.kategori === kategoriAdi);
          const haftalar = Array.from(new Set(kategoriMaclari.map(m => m.hafta)));

          return (
            <View key={index} style={{ marginBottom: 20 }}>
              {/* Kategori Başlığı */}
              <View style={styles.kategoriHeader}>
                <Text style={styles.kategoriHeaderText}>{kategoriAdi.toUpperCase()}</Text>
              </View>
              
              {/* Haftalar ve Maçlar */}
              {haftalar.map((haftaAdi, hIndex) => {
                const haftaMaclari = kategoriMaclari.filter(m => m.hafta === haftaAdi);
                return (
                  <View key={hIndex}>
                    <Text style={styles.haftaText}>{haftaAdi}</Text>
                    
                    {haftaMaclari.map((mac) => (
                      <TouchableOpacity 
                        key={mac.id} 
                        style={styles.macCard}
                        onPress={() => navigation.navigate('MacDetay', { mac, brans: 'basketbol' })}
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
    // Basketbol için lig isimleri
    const [seciliLig, setSeciliLig] = useState('Süper Lig');
    const [puanVerisi, setPuanVerisi] = useState<any[]>([]);

    React.useEffect(() => {
      // Seçilen lige göre listeyi filtrele
      const data = basketbolPuanDurumu.filter(takim => takim.lig === seciliLig);
      setPuanVerisi(data);
    }, [seciliLig]);

    return (
      <View style={{ flex: 1 }}>
        {/* Lig Seçici Butonlar */}
        <View style={styles.ligSecici}>
          <TouchableOpacity onPress={() => setSeciliLig('Süper Lig')} style={[styles.ligButon, seciliLig === 'Süper Lig' && styles.ligButonAktif]}>
            <Text style={[styles.ligButonText, seciliLig === 'Süper Lig' && styles.ligButonTextAktif]}>SÜPER LİG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSeciliLig('EuroLeague')} style={[styles.ligButon, seciliLig === 'EuroLeague' && styles.ligButonAktif]}>
            <Text style={[styles.ligButonText, seciliLig === 'EuroLeague' && styles.ligButonTextAktif]}>EUROLEAGUE</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.tabContent}>
          {/* Tablo Başlığı (B Sütunu Silindi) */}
          <View style={styles.puanTablosuRow}>
            <Text style={[styles.puanTabloBaslik, { width: 20 }]}>Sıra</Text>
            <Text style={[styles.puanTabloBaslik, { flex: 1}]}>Takımlar</Text>
            <Text style={styles.puanTabloBaslik}>O</Text>
            <Text style={styles.puanTabloBaslik}>G</Text>
            <Text style={styles.puanTabloBaslik}>M</Text>
            <Text style={styles.puanTabloBaslik}>Av</Text>
            <Text style={styles.puanTabloBaslik}>P</Text>
          </View>
          
          {/* Takımlar (B Sütunu Silindi) */}
          {puanVerisi.map((takim, index) => {
            const isFener = takim.takim.toUpperCase().includes("FENERBAHÇE");
            return (
              <View key={index} style={[styles.puanTablosuRow, isFener && { backgroundColor: 'rgba(254, 221, 0, 0.15)' }]}>
                <Text style={[styles.puanTabloHucre, { width: 25 }]}>{index + 1}</Text>
                <Text style={[styles.puanTabloHucre, { flex: 1, fontWeight: isFener ? 'bold' : 'normal' }]}>{takim.takim}</Text>
                <Text style={styles.puanTabloHucre}>{takim.oynanan}</Text>
                <Text style={styles.puanTabloHucre}>{takim.galibiyet}</Text>
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
        <Text style={styles.appBarTitle}>BASKETBOL</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* TabBar */}
      <View style={styles.tabBar}>
        {[
          { icon: 'newspaper', text: 'Haberler' },
          { icon: 'event', text: 'Fikstür' },
          { icon: 'leaderboard', text: 'Puan Durumu' },
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

      {/* İçerik */}
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
  appBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 50, paddingBottom: 15 },
  appBarTitle: { color: '#FEDD00', fontSize: 20, fontWeight: 'bold' },
  tabBar: { flexDirection: 'row', backgroundColor: '#001430', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  tabButton: { flex: 1, alignItems: 'center', paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTabButton: { borderBottomColor: '#FEDD00' },
  tabText: { color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 4, fontWeight: '600' },
  activeTabText: { color: '#FEDD00' },
  tabContent: { padding: 15},
  haberCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  haberImage: { width: '100%', height: 200, resizeMode: 'cover' },
  haberTextContainer: { padding: 15 },
  haberTarih: { color: '#FEDD00', fontSize: 12, marginBottom: 5 },
  haberBaslik: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  mevkiHeader: { backgroundColor: '#FEDD00', padding: 10, borderRadius: 10, marginBottom: 15 },
  mevkiHeaderText: { color: '#001430', fontWeight: 'bold', fontSize: 16 },
  oyuncuGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  oyuncuCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 15, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  oyuncuImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#001430', marginBottom: 10 },
  oyuncuIsim: { color: 'white', fontWeight: 'bold', fontSize: 13, textAlign: 'center', marginBottom: 8, minHeight: 35 },
  oyuncuNumaraBadge: { backgroundColor: '#FEDD00', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  oyuncuNumaraText: { color: '#001430', fontWeight: 'bold', fontSize: 12 },

  ligSecici: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  ligButon: { flex: 1, padding: 15, alignItems: 'center' },
  ligButonAktif: { borderBottomWidth: 2, borderBottomColor: '#FEDD00' },
  ligButonText: { color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' },
  ligButonTextAktif: { color: '#FEDD00' },
  puanTablosuRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)', alignItems: 'center' },
  puanTabloBaslik: { color: '#FEDD00', fontSize: 11, fontWeight: 'bold', width: 25, textAlign: 'center' },
  puanTabloHucre: { color: 'white', fontSize: 11, width: 25, textAlign: 'center' },

  // Fikstür Stilleri
  kategoriHeader: { backgroundColor: '#FEDD00', padding: 8, borderRadius: 5, marginBottom: 10 },
  kategoriHeaderText: { color: '#001430', fontWeight: 'bold', fontSize: 14 },
  haftaText: { color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 5, marginBottom: 10 },
  macCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'space-between' },
  takimText: { flex: 1, color: 'white', fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  skorText: { color: '#FEDD00', fontSize: 20, fontWeight: 'bold' },
  tarihSaatText: { color: '#FEDD00', fontSize: 11 },

});