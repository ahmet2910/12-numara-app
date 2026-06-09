import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

// --- DATA MODELLERİ ---
const haberlerListesi = [
  {
    id: '1',
    baslik: "Fenerbahçeli milli boksörlerimiz, Dünya sıralamasında zirvede",
    icerik: "Kazandıkları madalyalarla, kırdıkları rekorlarla camiamıza ve ülkemize büyük bir gurur yaşatan Fenerbahçeli milli boksörlerimiz, göğsümüzü kabartmaya devam ediyor.\n\nDünyanın En Büyük Spor Kulübü Fenerbahçemizin sporcusu Buse Naz Çakıroğlu, 51 kiloda dünya sıralamasında ilk sıraya yerleşti.\n\nWorld Boxing’in sosyal medya platformu Instagram hesabından yaptığı paylaşımda, sıkletlerinde ilk 10 sırada yer alan kadın boksörler duyuruldu.\n\nMilli boksörümüz Buse Naz Çakıroğlu, 51 kiloda zirvede yer alırken, Kazakistanlı Alua Balkibekova ikinci, Finlandiyalı Pihla Kaivo Oja da üçüncü oldu.\n\nDünya sıralamasında derece elde eden Fenerbahçeli diğer boksörlerimizden; Büşra Işıldar 75 kiloda ikinci, Hatice Akbaş 54 kiloda üçüncü, Şeyma Düztaş +80 kiloda dördüncü, Busenaz Sürmeneli 65 kiloda beşinci, Sema Çalışkan da 70 kiloda altıncı sırada yer aldı.\n\nBoksörlerimizi tebrik ediyor, başarılarının devamını diliyoruz.",
    foto: require('../../../assets/boks_haber1.jpg'),
    tarih: "23 Ekim 2025 Perşembe 17:15",
  },
  {
    id: '2',
    baslik: "Boks Şubemiz, Türkiye Şampiyonası öncesi organize edilen kahvaltıda bir araya geldi",
    icerik: "Şampiyon boksörlerimizin bir kez daha zirve mücadelesi vereceği Türkiye Ferdi Boks Şampiyonası öncesinde, Boks Şubemizden Sorumlu Yönetim Kurulu Üyemiz İlker Alkun, Amatör Şubeler Koordinatörümüz Seçkin Saruhan ve Boks Şubemizin Sorumlusu Atagün Yalçınkaya sporcularımızla kahvaltı organizasyonunda buluştu.\n\nTürkiye Boks Federasyonu 2026 yılı faaliyet programında yer alan Büyük Erkekler ve Büyük Kadınlar Türkiye Ferdi Boks Şampiyonası, 25 Ocak- 1 Şubat tarihleri arasında Kocaeli'nin Darıca ilçesindeki Eray Şamdan Spor Salonu'nda düzenlenecek. Bu özel organizasyon öncesinde yöneticilerimiz ise boksörlerimiz ile kamp yaptıkları otelde bir araya geldi.\n\nTurnuva öncesinde sporcularımıza moral vermek ve motivasyonlarını daha da yukarılara çekme amacıyla düzenlenen kahvaltı organizasyonu keyifli anlara sahne oldu.\n\nBoksörlerimizle yakından ilgilenen Boks Şubemizden Sorumlu Yönetim Kurulu Üyemiz İlker Alkun, sporcularımıza madalya yolunda başarılar diledi.\n\nDaha sonra Başkanımız Sadettin Saran, görüntülü arayarak boksörlerimize ve tüm kafileye başarı dileklerini ileterek, şampiyonluğa inandığını ifade etti.\n\nOrganizasyonu Fenerbahçe TV'ye değerlendiren Yöneticimiz İlker Alkun, Amatör Şubeler Koordinatörümüz Seçkin Saruhan ve Boks Şubemizin Sorumlusu Atagün Yalçınkaya; boksörlerimize inandıklarını ve güvendiklerini dile getirdi.\n\nToplam 20 sıklette 68 ilden 340 erkek, 160 kadın olmak üzere toplamda 500 boksörün katılacağı şampiyonada Fenerbahçe Boks Şubemiz, 20 kadın, 26 erkek boksörle Türkiye şampiyonluğu için ringe çıkacak.",
    foto: require('../../../assets/boks_haber2.jpg'),
    tarih: "24 Ocak 2026 Cumartesi 12:25",
  },
  {
    id: '3',
    baslik: "Boksörlerimizden 17 madalya",
    icerik: "Fenerbahçeli boksörler, Minikler ve Yıldızlar İstanbul Teşvik müsabakalarını 13 altın ve 4 gümüş madalya ile tamamladı.\n\n25–27 Aralık tarihleri arasında İstanbul Halkalı Kapalı Spor Salonu’nda yapılan turnuvaya Fenerbahçeli sporcular damga vurdu.\n\nBoksörlerimizden 52 kg Cansu Kaya, 54 kg Loya Topçu, 57 kg Ceren Gecir, 66 kg Ada Eybey, 50 kg Ali Fırat Acar, 52 kg Yılmaz Elçi, 54 kg Hacı Çetin, 57 kg Miraç Saral, 60 kg Batuhan Arpağ, 60 kg İhsan Osmanoğlu, 63 kg Erdem Çetin, 66 kg Caner Kemer ve 70 kg Cengiz Tuğra altın madalyanın sahibi oldu.\n\n50 kg Melek Eftal Yılmaz, 54 kg Sinan Efe Torun, 60 kg Enes Kayasaroğlu ve 52 kg Tuna Karakuş ise gümüş madalya kazandı.\n\nSporcularımızı ve antrenörlerimizi tebrik eder, başarılarının devamını dileriz.",
    foto: require('../../../assets/boks_haber3.jpg'),
    tarih: "27 Aralık 2025 Cumartesi 18:36",
  },
];

const sporcular = [
  { isim: "Buse Naz Çakıroğlu", gorev: "", foto: require('../../../assets/busenaz.png') },
  { isim: "Bilge Kağan Kanlı", gorev: "", foto: require('../../../assets/bilge.png') },
  { isim: "Busenaz Sürmeneli", gorev: "", foto: require('../../../assets/buse.png') },
  { isim: "Cem Kaya", gorev: "", foto: require('../../../assets/cem.png') },
  { isim: "Hatice Akbaş", gorev: "", foto: require('../../../assets/hatice.png') },
  { isim: "Ayşe Çağırır", gorev: "", foto: require('../../../assets/default.png') },
  { isim: "Şennur Demir", gorev: "", foto: require('../../../assets/default.png') },
  { isim: "Sema Çalışkan", gorev: "", foto: require('../../../assets/sema.png') },
  { isim: "Emrah Yaşar", gorev: "", foto: require('../../../assets/default.png') },
  { isim: "Muhammet Musa Macit", gorev: "", foto: require('../../../assets/musa.png') },
];

const teknikKadro = [
  { isim: "Atagün Yalçınkaya", gorev: "Şube Sorumlusu", foto: require('../../../assets/default.png') },
  { isim: "Tuncay Tavukçu", gorev: "Başantrenör", foto: require('../../../assets/default.png') },
  { isim: "Türkan Karaboğa", gorev: "Şube Asistanı", foto: require('../../../assets/default.png') },
  { isim: "Nazım Yiğit", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Tuncay Varol", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Ensar Tatar", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Metin Gemici", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Bedir Tulgar", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Abdürrahim Daştan", gorev: "Antrenör", foto: require('../../../assets/default.png') },
  { isim: "Seyfullah Dumlupınar", gorev: "Antrenör", foto: require('../../../assets/default.png') },
];

export default function BoksPage() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState(0);

  const HaberlerTab = () => (
    <FlatList
      data={haberlerListesi}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.tabContent}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.haberCard} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BoksHaberDetay', { haber: item })}
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

  const HakkimizdaTab = () => (
    <ScrollView bounces={false}>
      <View style={styles.bannerContainer}>
        <Image source={require('../../../assets/boks_hakkimizda.jpg')} style={styles.bannerImage} />
        <View style={styles.bannerOverlay} />
        <Text style={styles.bannerTitle}>BOKS</Text>
      </View>

      <View style={styles.hakkimizdaIcerik}>
        <Text style={styles.hakkimizdaBaslik}>BOKS ŞUBESİ HAKKINDA</Text>
        <View style={styles.ayiriciCizgi} />
        
        <Text style={styles.hakkimizdaMetin}>
          Fenerbahçe'de sistemli boks çalışmaları Tıbbiyeli Ali Sami Bey ve arkadaşlarının çabalarıyla başlamıştır. 1914 yılında Kuşdili'ndeki yeni kulüp binasına dönemin başkanı Sabri Toprak'ın bir ring kurdurmasıyla bu faaliyetler hızlanmıştır.{"\n\n"}
          1919 yılında Türk ulusunun hürriyet mücadelesi ile birlikte, İstanbul’daki işgalci güçlerin ve azınlıkların sporcuları arasında düzenlenen boks müsabakalarını gören Türk gençleri işgale karşı öfkelerini ringlerde göstermeyi düşünmüşler ve boks sporuna yönelmişlerdir. İlk planlı boks çalışmalarına 1920 yılında Kadıköy-Kuşdili Salonu'nda yapılmaya başlanmış ve aynı yıl yine bu salonda büyük bir şampiyona düzenlenmiştir. Yabancı sporcuların da katıldıkları bu şampiyonada Fenerbahçe’den Ziya Boyer, daha sonra Fenerbahçe Spor Kulübü başkanlığı da yapan İsmet Uluğ ve Sait Mısırlı sıkletlerinde şampiyon olmuşlardır.{"\n\n"}
          1920 yılından sonra Fenerbahçeli gençler, yabancılara karşı büyük başarılar elde ettiler. Yukarıdaki şampiyonlara ilaveten, Nuri, Sıtkı, Hikmet, Orhan, Sermet, Sabih, Remzi, Fevzi ve Raşit adlı Fenerbahçeli boksörler yabancılara ve azınlıkların boksörlerine karşı büyük başarılar elde ettiler ve gösterdikleri üstün başarılarından dolayı İstiklal Madalyası ile taltif edildiler.{"\n\n"}
          İlk Türk ajanlarından olan ve 'İngiliz Kemal' olarak tanınan Ahmet Esat Tomruk da ringlerde yabancılara karşı nice zaferler kazanan ve hem bu performansıyla hem de ulusal mücadelede verdiği nice hizmetten dolayı Mustafa Kemal Atatürk'ün 'Aferin Türk evladı' diyerek alnından öptüğü bir sarı-lacivertli boksördür.{"\n\n"}
          1919 yılından itibaren, Beyoğlu'nda Skatling, Variété ve Tepebaşı Salonu ile Halep Çarşısı’ndaki Winter Palas’ta tertiplenen müsabakalara katılan Fenerbahçeli boksörlerin galibiyetleri işgalden dolayı sinmiş Türklerin yüreğine su serpmiştir. 1920 yılında ise maçlar izdihamdan dolayı stadlara alınmaya başlamıştır. 1920 Aralık ayında, stadlarda yapılan ilk şampiyonada Fenerbahçe'den 63 kiloda mücadele veren İsmet Uluğ, Beşiktaş Jimnastik Kulübü'nden 70 kilo gelen Suphi’yi yapılan büyük dövüşte beşinci raundda yenerek şampiyon olmuştur.{"\n\n"}
          İsmet Uluğ 1921 yılında Tepebaşı Tiyatrosu’nda Fenerbahçe Spor Bayramı’nda, yine Beşiktaşlı Hikmet’i birinci raundda nakavtla yenerek sarı-lacivertli formanın şampiyonluğunu sürdürmüştür. 9 Aralık 1923 akşamı Spring Salonu’nda, İstanbul horoz siklet şampiyonu Nuri’nin meşhur şampiyon Havrios’u beşinci raundda nakavt edişi muazzam bir coşkunluk yaratmıştır. İşte bu Nuri Türkiye'de kendisine rakip bulamadığından Avrupa ringlerine göç etmiş ve 1925 yılından itibaren Paris'in ringlerinde fırtına gibi esmeye başlamış ve Paris halkının sevgilisi olmuştur. Çok süratli ve dövüşken bir stile malik olduğu için kendisine 'Dardanelles' (Çanakkale) lakabı takılmıştır. Türk boks tarihine ise adı 'Çanakkale Fırtınası Nuri' olarak geçmiştir.{"\n\n"}
          2020 yılına kadar Erkek ve Kadınlar takım halinde Türkiye Şampiyonu olmuştur. 2020 yılında Başkanımız Sayın Ali Yıldırım Koç yönetiminde ulusal ve uluslararası başarıları devam ediyor. Boks Şube sorumlusu Selahattin Atasever tarafından yönetilmekte olup başarılar devam etmektedir.{"\n\n"}
          Fenerbahçeli milli boksör Buse Naz Çakıroğlu, Tokyo'da düzenlenen olimpiyatlarda tarihi bir başarıya imza atmış ve 51 kiloda gümüş madalya kazanmıştır.{"\n\n"}
          Kadın boksörlerimiz, ülkemizin ev sahipliğinde 2022 yılında ülkemizde düzenlenen Dünya Kadınlar Boks Şampiyonası’nda elde ettikleri başarılarla gözlerimizi doldurdular, göğsümüzü kabarttılar. Şampiyonada ülkemizi temsil eden 12 boksörden 8’ini oluşturan Fenerbahçeli sporcularımız adlarını dünya şampiyonluklarına yazdırdılar, turnuvada 4’ü altın, 1’i bronz madalya olmak üzere 5 madalya kazandılar.{"\n\n"}
          48 kiloda Ayşe Çağırır,{"\n"}
          50 kiloda Buse Naz Çakıroğlu,{"\n"}
          54 kiloda Hatice Akbaş ve{"\n"}
          +81 kiloda Şennur Demir ALTIN,{"\n"}
          70 kiloda Sema Çalışkan BRONZ madalyanın sahibi oldular.
        </Text>

        <Text style={styles.hakkimizdaAltMetin}>
          Dünyanın En Büyük Spor Kulübü vizyonuyla, her sıklette şampiyonluk hedefleyen sporcularımız Dereağzı Lefter Küçükandonyadis Tesisleri'nde çalışmalarını sürdürmektedir. Fenerbahçe boksörleri, olimpiyatlarda aldıkları madalyalarla kulübümüzü ve ülkemizi gururlandırmaya devam etmektedir.
        </Text>

        <View style={styles.antrenmanKutusu}>
          <Text style={styles.antrenmanMetni}>
            Antrenmanlarımız hafta içi her gün profesyonel teknik ekibimiz eşliğinde gerçekleştirilmektedir.
          </Text>
        </View>
      </View>
    </ScrollView>
  );

  const KadroTab = ({ liste, baslik }: { liste: any[], baslik: string }) => (
    <View style={{ flex: 1 }}>
      <View style={styles.kadroHeader}>
        <Text style={styles.kadroHeaderText}>{baslik}</Text>
      </View>
      <FlatList
        data={liste}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.tabContent}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.kisiCard}>
            <Image source={item.foto} style={styles.kisiImage} />
            <Text style={styles.kisiIsim} numberOfLines={2}>{item.isim}</Text>
            {item.gorev !== "" && <Text style={styles.kisiGorev}>{item.gorev}</Text>}
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <Icon name="arrow-back-ios" size={24} color="#FEDD00" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>BOKS</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabBar}>
        {[
          { icon: 'newspaper', text: 'Haberler' },
          { icon: 'history-edu', text: 'Hakkımızda' },
          { icon: 'groups', text: 'Sporcular' },
          { icon: 'assignment-ind', text: 'Teknik Kadro' }
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

      <View style={{ flex: 1 }}>
        {activeTab === 0 && <HaberlerTab />}
        {activeTab === 1 && <HakkimizdaTab />}
        {activeTab === 2 && <KadroTab liste={sporcular} baslik="MİLLİ BOKSÖRLERİMİZ" />}
        {activeTab === 3 && <KadroTab liste={teknikKadro} baslik="TEKNİK EKİP" />}
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
  tabText: { color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 4, fontWeight: '600' },
  activeTabText: { color: '#FEDD00' },
  tabContent: { padding: 15 },
  
  // Haber Stilleri
  haberCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  haberImage: { width: '100%', height: 200, resizeMode: 'cover' },
  haberTextContainer: { padding: 15 },
  haberTarih: { color: '#FEDD00', fontSize: 12, marginBottom: 5 },
  haberBaslik: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  // Hakkımızda Stilleri
  bannerContainer: { width: '100%', height: 220, justifyContent: 'flex-end' },
  bannerImage: { width: '100%', height: '100%', position: 'absolute', resizeMode: 'cover' },
  bannerOverlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.5)' },
  bannerTitle: { color: '#FEDD00', fontSize: 28, fontWeight: 'bold', letterSpacing: 1.2, margin: 20 },
  hakkimizdaIcerik: { padding: 20, paddingBottom: 50 },
  hakkimizdaBaslik: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  ayiriciCizgi: { height: 2, backgroundColor: '#FEDD00', width: 100, marginVertical: 10 },
  hakkimizdaMetin: { color: 'rgba(255,255,255,0.9)', fontSize: 16, fontWeight: '600', lineHeight: 24 },
  hakkimizdaAltMetin: { color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 24, marginTop: 15 },
  antrenmanKutusu: { marginTop: 30, padding: 15, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#FEDD00' },
  antrenmanMetni: { color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' },

  // Kadro Stilleri
  kadroHeader: { width: '100%', padding: 12, backgroundColor: '#FEDD00' },
  kadroHeaderText: { color: '#001430', fontWeight: 'bold', textAlign: 'center' },
  kisiCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 15, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  kisiImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#001430', marginBottom: 10 },
  kisiIsim: { color: 'white', fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
  kisiGorev: { color: '#FEDD00', fontSize: 12, marginTop: 5 },
});