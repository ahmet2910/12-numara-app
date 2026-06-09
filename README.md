# 🟡🔵 12 Numara - Taraftar Uygulaması

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![OpenWeather API](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

12 Numara, React Native mimarisi kullanılarak geliştirilmiş, çapraz platform (iOS/Android) destekli, ölçeklenebilir bir mobil spor uygulamasıdır. Kulübün faaliyet gösterdiği tüm spor branşlarını tek bir dinamik arayüz mimarisi altında toplamak üzere tasarlanmıştır (mevcut MVP aşamasında Futbol ve Basketbol branşlarına odaklanılmıştır).

## 🚀 Öne Çıkan Özellikler

* **Çevrimdışı Öncelikli Kimlik Doğrulama (Auth Flow):** Giriş ve kayıt olma süreçleri, mükerrer kayıt kontrolü (duplicate check) ve güvenli veri yönetimi ile `AsyncStorage` kullanılarak yerel hafızada yönetilir.
* **Dinamik Arayüz Oluşturma (Dynamic UI Rendering):** Akıllı `MacDetay` bileşeni, tıklanan maçın branşını otomatik olarak algılar ve arayüzü (ikonlar, başlıklar, veri formatları) saniyeler içinde otonom olarak dönüştürür (Örn: Futbol için "Gol/Dakika" formatından Basketbol için "Sayı/Asist/Ribaund" formatına geçiş).
* **İlişkisel Yerel Veri Yapısı:** İstatistik ve olay verileri, ilişkisel veritabanı mantığına uygun olarak yabancı anahtar (`macId`) kullanımı ile yapılandırılmış ve milimetrik olarak filtrelenmiştir.
* **Canlı Hava Durumu Entegrasyonu:** **OpenWeatherMap REST API** entegrasyonu sayesinde, maçın oynanacağı şehir bilgisi asenkron (async/await) isteklerle sorgulanarak canlı sıcaklık ve hava durumu verileri anlık olarak ekrana yansıtılır.
* **Performans Optimizasyonu:** Klavye girdileri sırasında tüm sayfanın gereksiz yere yeniden render (re-render) edilmesini önlemek amacıyla input bileşenleri ana fonksiyonun dışına taşınarak klavye gecikmeleri sıfıra indirilmiştir.

## 🛠️ Kullanılan Teknolojiler

* **Frontend Framework:** React Native (Expo)
* **Navigasyon:** React Navigation
* **Programlama Dili:** TypeScript / JavaScript
* **Yerel Depolama:** AsyncStorage
* **Canlı Veri:** OpenWeatherMap API
* **İkon Kütüphanesi:** React Native Vector Icons


## 🔮 Gelecek Çalışmalar (Yol Haritası)

- [ ] Firebase veya Node.js/PostgreSQL tabanlı gerçek zamanlı merkezi bir Backend sunucusuna geçiş yapılması.
- [ ] Mevcut ölçeklenebilir mimariyi kullanarak Voleybol, Kürek ve Masa Tenisi gibi diğer tüm branşların kod yapısına dokunulmadan veritabanı üzerinden sisteme dahil edilmesi.
- [ ] WebSocket teknolojisi entegre edilerek canlı skorların arayüze anlık (real-time) yansıtılması.
- [ ] Firebase Cloud Messaging (FCM) ile anlık bildirim (Push Notification) sisteminin kurulması.

## 📥 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

```bash
# Projeyi klonlayın
git clone [https://github.com/ahmet2910/12-numara-app.git](https://github.com/ahmet2910/12-numara-app.git)

# Proje klasörüne gidin
cd 12-numara-app

# Gerekli bağımlılıkları yükleyin
npm install

# Önbelleği temizleyerek projeyi ayağa kaldırın
npx expo start --clear
