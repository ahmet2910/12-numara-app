// --- 1. FİKSTÜR (MAÇLAR) TABLOSU ---
export const maclar = [
  // Trendyol Süper Lig
  { id: '1', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'CORENDON ALANYASPOR', sehir: 'İstanbul', saat: '20:00', tarih: '17.09.2025', skor: '2 - 2', kategori: 'Trendyol Süper Lig', hafta: '1. Hafta' },
  { id: '2', evSahibi: 'GÖZTEPE A.Ş.', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İzmir', saat: '21:30', tarih: '16.08.2025', skor: '0 - 0', kategori: 'Trendyol Süper Lig', hafta: '2. Hafta' },
  { id: '3', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'KOCAELİSPOR', sehir: 'İstanbul', saat: '21:30', tarih: '23.08.2025', skor: '3 - 1', kategori: 'Trendyol Süper Lig', hafta: '3. Hafta' },
  { id: '4', evSahibi: 'GENÇLERBİRLİĞİ', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Ankara', saat: '19:00', tarih: '31.08.2025', skor: '1 - 3', kategori: 'Trendyol Süper Lig', hafta: '4. Hafta' },
  { id: '5', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'TRABZONSPOR A.Ş.', sehir: 'İstanbul', saat: '19:00', tarih: '14.09.2025', skor: '1 - 0', kategori: 'Trendyol Süper Lig', hafta: '5. Hafta' },
  { id: '6', evSahibi: 'KASIMPAŞA A.Ş', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: '20:00', tarih: '21.09.2025', skor: '1 - 1', kategori: 'Trendyol Süper Lig', hafta: '6. Hafta' },
  { id: '7', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'HESAP.COM ANTALYASPOR', sehir: 'İstanbul', saat: '20:00', tarih: '28.09.2025', skor: '2 - 0', kategori: 'Trendyol Süper Lig', hafta: '7. Hafta' },
  { id: '8', evSahibi: 'SAMSUNSPOR A.Ş', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Samsun', saat: '20:00', tarih: '05.10.2025', skor: '0 - 0', kategori: 'Trendyol Süper Lig', hafta: '8. Hafta' },
  { id: '9', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'MISIRLI.COM.TR FATİH KARAGÜMRÜK', sehir: 'İstanbul', saat: '20:00', tarih: '19.10.2025', skor: '2 - 1', kategori: 'Trendyol Süper Lig', hafta: '9. Hafta' },
  { id: '10', evSahibi: 'GAZİANTEP FUTBOL KULÜBÜ A.Ş', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Gaziantep', saat: '20:00', tarih: '27.10.2025', skor: '0 - 4', kategori: 'Trendyol Süper Lig', hafta: '10. Hafta' },
  { id: '11', evSahibi: 'BEŞİKTAŞ A.Ş', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: '20:00', tarih: '02.11.2025', skor: '2 - 3', kategori: 'Trendyol Süper Lig', hafta: '11. Hafta' },
  { id: '12', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'ZECORNER KAYSERİSPOR', sehir: 'İstanbul', saat: '20:00', tarih: '09.11.2025', skor: '4 - 2', kategori: 'Trendyol Süper Lig', hafta: '12. Hafta' },
  { id: '13', evSahibi: 'ÇAYKUR RİZESPOR A.Ş', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Rize', saat: '20:00', tarih: '23.11.2025', skor: '2 - 5', kategori: 'Trendyol Süper Lig', hafta: '13. Hafta' },
  { id: '14', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'GALATASARAY A.Ş.', sehir: 'İstanbul', saat: '20:00', tarih: '01.12.2025', skor: '1 - 1', kategori: 'Trendyol Süper Lig', hafta: '14. Hafta' },
  { id: '15', evSahibi: 'RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: '20:00', tarih: '06.12.2025', skor: '1 - 1', kategori: 'Trendyol Süper Lig', hafta: '15. Hafta' },
  { id: '16', evSahibi: 'FENERBAHÇE A.Ş', deplasman: 'TÜMOSAN KONYASPOR', sehir: 'İstanbul', saat: '20:00', tarih: '15.12.2025', skor: '4 - 0', kategori: 'Trendyol Süper Lig', hafta: '16. Hafta' },
  { id: '17', evSahibi: 'İKAS EYÜPSPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: '17:00', tarih: '20.12.2025', skor: '0 - 3', kategori: 'Trendyol Süper Lig', hafta: '17. Hafta' },
  { id: '18', evSahibi: 'CORENDON ALANYASPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Antalya', saat: '20:00', tarih: '18.01.2026', skor: '2 - 3', kategori: 'Trendyol Süper Lig', hafta: '18. Hafta' }, // Özel ID'li maç
  { id: '19', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'GÖZTEPE A.Ş.', sehir: 'Istanbul', saat: '20:00', tarih: '25.01.2026', skor: '1 - 1', kategori: 'Trendyol Süper Lig', hafta: '19. Hafta' }, // Özel ID'li maç
  { id: '20', evSahibi: 'KOCAELİSPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Kocaeli', saat: ' : ', tarih: '01.02.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '20. Hafta' },
  { id: '21', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'GENÇLERBİRLİĞİ', sehir: 'İstanbul', saat: ' : ', tarih: '08.02.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '21. Hafta' },
  { id: '22', evSahibi: 'TRABZONSPOR A.Ş.', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Trabzon', saat: ' : ', tarih: '15.02.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '22. Hafta' },
  { id: '23', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'KASIMPAŞA A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '22.02.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '23. Hafta' },
  { id: '24', evSahibi: 'HESAP.COM ANTALYASPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Antalya', saat: ' : ', tarih: '01.03.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '24. Hafta' },
  { id: '25', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'SAMSUNSPOR A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '08.03.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '25. Hafta' },
  { id: '26', evSahibi: 'MISIRLI.COM.TR FATİH KARAGÜMRÜK', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '15.03.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '26. Hafta' },
  { id: '27', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'GAZİANTEP FUTBOL KULÜBÜ A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '22.03.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '27. Hafta' },
  { id: '28', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'BEŞİKTAŞ A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '05.04.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '28. Hafta' },
  { id: '29', evSahibi: 'ZECORNER KAYSERİSPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Kayseri', saat: ' : ', tarih: '12.04.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '29. Hafta' },
  { id: '30', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'ÇAYKUR RİZESPOR A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '19.04.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '30. Hafta' },
  { id: '31', evSahibi: 'GALATASARAY A.Ş.', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '26.04.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '31. Hafta' },
  { id: '32', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ', sehir: 'İstanbul', saat: ' : ', tarih: '03.05.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '32. Hafta' },
  { id: '33', evSahibi: 'TÜMOSAN KONYASPOR', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Konya', saat: ' : ', tarih: '10.05.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '33. Hafta' },
  { id: '34', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'İKAS EYÜPSPOR', sehir: 'İstanbul', saat: ' : ', tarih: '17.05.2026', skor: ' - ', kategori: 'Trendyol Süper Lig', hafta: '34. Hafta' },

  // Şampiyonlar Ligi & Avrupa Ligi
  { id: '35', evSahibi: 'FEYENOORD', deplasman: 'FENERBAHÇE', sehir: 'Rotterdam', saat: ' : ', tarih: '06.08.2025', skor: '2 - 1', kategori: 'Şampiyonlar Ligi', hafta: '3. Eleme Turu' },
  { id: '36', evSahibi: 'FENERBAHÇE', deplasman: 'FEYENOORD', sehir: 'İstanbul', saat: ' : ', tarih: '12.08.2025', skor: '5 - 2', kategori: 'Şampiyonlar Ligi', hafta: '3. Eleme Turu' },
  { id: '37', evSahibi: 'FENERBAHÇE', deplasman: 'BENFİCA', sehir: 'İstanbul', saat: ' : ', tarih: '20.08.2025', skor: '0 - 0', kategori: 'Şampiyonlar Ligi', hafta: 'Play-off Turu' },
  { id: '38', evSahibi: 'BENFİCA', deplasman: 'FENERBAHÇE', sehir: 'Lizbon', saat: ' : ', tarih: '27.08.2025', skor: '1 - 0', kategori: 'Şampiyonlar Ligi', hafta: 'Play-off Turu' },
  { id: '39', evSahibi: 'DİNAMO ZAGREB', deplasman: 'FENERBAHÇE', sehir: 'Zagreb', saat: '23:00', tarih: '24.09.2025', skor: '3 - 1', kategori: 'Avrupa Ligi', hafta: '1. Hafta' },
  { id: '40', evSahibi: 'FENERBAHÇE', deplasman: 'NİCE', sehir: 'İstanbul', saat: '20:45', tarih: '02.10.2025', skor: '2 - 1', kategori: 'Avrupa Ligi', hafta: '2. Hafta' },
  { id: '41', evSahibi: 'FENERBAHÇE', deplasman: 'STUTTGART', sehir: 'İstanbul', saat: '20:45', tarih: '23.10.2025', skor: '1 - 0', kategori: 'Avrupa Ligi', hafta: '3. Hafta' },
  { id: '42', evSahibi: 'VİKTORİA PLZEN', deplasman: 'FENERBAHÇE', sehir: 'Plzen', saat: '23:00', tarih: '06.11.2025', skor: '0 - 0', kategori: 'Avrupa Ligi', hafta: '4. Hafta' },
  { id: '43', evSahibi: 'FENERBAHÇE', deplasman: 'FERENCVAROS', sehir: 'İstanbul', saat: '20:45', tarih: '27.11.2025', skor: '1 - 1', kategori: 'Avrupa Ligi', hafta: '5. Hafta' },
  { id: '44', evSahibi: 'BRANN', deplasman: 'FENERBAHÇE', sehir: 'Bergen', saat: '23:00', tarih: '11.12.2025', skor: '0 - 4', kategori: 'Avrupa Ligi', hafta: '6. Hafta' },
  { id: '47', evSahibi: 'FENERBAHÇE', deplasman: 'ASTON VİLLA', sehir: 'Istanbul', saat: '20:45', tarih: '22.01.2026', skor: '0 - 1', kategori: 'Avrupa Ligi', hafta: '7. Hafta' }, // Özel ID
  { id: '48', evSahibi: 'FCBS', deplasman: 'FENERBAHÇE', sehir: 'Bucharest', saat: '23:00', tarih: '29.01.2026', skor: '1 - 1', kategori: 'Avrupa Ligi', hafta: '8. Hafta' }, // Özel ID

  // ZTK
  { id: '101', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'BEŞİKTAŞ A.Ş.', sehir: 'İstanbul', saat: '20:30', tarih: '23.12.2025', skor: '1 - 2', kategori: 'Ziraat Türkiye Kupası', hafta: '1. Hafta' },
  { id: '102', evSahibi: 'BEYOĞLU Y.ÇARŞI', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'İstanbul', saat: ' : ', tarih: '13.01.2026', skor: '0 - 1', kategori: 'Ziraat Türkiye Kupası', hafta: '2. Hafta' },
  { id: '103', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'ERZURUM FK', sehir: 'Istanbul', saat: ' : ', tarih: '02.02.2026', skor: ' - ', kategori: 'Ziraat Türkiye Kupası', hafta: '3. Hafta' },
  { id: '104', evSahibi: 'GAZİANTEP FK', deplasman: 'FENERBAHÇE A.Ş.', sehir: 'Gaziantep', saat: ' : ', tarih: '02.03.2026', skor: ' - ', kategori: 'Ziraat Türkiye Kupası', hafta: '4. Hafta' },
  { id: '49', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'SAMSUNSPOR', sehir: 'Adana', saat: '20:30', tarih: '06.01.2025', skor: '2 - 0', kategori: 'Turkcell Süper Kupa', hafta: 'Yarı Final' }, // Özel ID
  { id: '50', evSahibi: 'FENERBAHÇE A.Ş.', deplasman: 'GALATASARAY A.Ş.', sehir: 'Istanbul', saat: '18:45', tarih: '10.01.2025', skor: '2 - 0', kategori: 'Turkcell Süper Kupa', hafta: 'Final' }, // Özel ID
];

// --- 2. PUAN DURUMU TABLOSU ---
export const puan_durumu = [
  // Trendyol Süper Lig
 { id: '1', takim: 'Galatasaray', oynanan: 34, galibiyet: 24, beraberlik: 5, maglubiyet: 5, atilan: 77, yenilen: 30, averaj: 47, puan: 77, kategori: 'Trendyol Süper Lig' },
  { id: '2', takim: 'Fenerbahçe', oynanan: 34, galibiyet: 21, beraberlik: 11, maglubiyet: 2, atilan: 77, yenilen: 37, averaj: 40, puan: 74, kategori: 'Trendyol Süper Lig' },
  { id: '3', takim: 'Trabzonspor', oynanan: 34, galibiyet: 20, beraberlik: 9, maglubiyet: 5, atilan: 61, yenilen: 39, averaj: 22, puan: 69, kategori: 'Trendyol Süper Lig' },
  { id: '4', takim: 'Beşiktaş', oynanan: 34, galibiyet: 17, beraberlik: 9, maglubiyet: 8, atilan: 59, yenilen: 40, averaj: 19, puan: 60, kategori: 'Trendyol Süper Lig' },
  { id: '5', takim: 'Rams Başakşehir', oynanan: 34, galibiyet: 16, beraberlik: 9, maglubiyet: 9, atilan: 58, yenilen: 35, averaj: 23, puan: 57, kategori: 'Trendyol Süper Lig' },
  { id: '6', takim: 'Göztepe', oynanan: 34, galibiyet: 14, beraberlik: 13, maglubiyet: 7, atilan: 42, yenilen: 32, averaj: 10, puan: 55, kategori: 'Trendyol Süper Lig' },
  { id: '7', takim: 'Samsunspor', oynanan: 34, galibiyet: 13, beraberlik: 12, maglubiyet: 9, atilan: 46, yenilen: 45, averaj: 1, puan: 51, kategori: 'Trendyol Süper Lig' },
  { id: '8', takim: 'Çaykur Rizespor', oynanan: 34, galibiyet: 10, beraberlik: 11, maglubiyet: 13, atilan: 46, yenilen: 52, averaj: -6, puan: 41, kategori: 'Trendyol Süper Lig' },
  { id: '9', takim: 'Tümosan Konyaspor', oynanan: 34, galibiyet: 10, beraberlik: 10, maglubiyet: 14, atilan: 43, yenilen: 50, averaj: -7, puan: 40, kategori: 'Trendyol Süper Lig' },
  { id: '10', takim: 'Kocaelispor', oynanan: 34, galibiyet: 9, beraberlik: 10, maglubiyet: 15, atilan: 26, yenilen: 38, averaj: -12, puan: 37, kategori: 'Trendyol Süper Lig' },
  { id: '11', takim: 'Corendon Alanyaspor', oynanan: 34, galibiyet: 7, beraberlik: 16, maglubiyet: 11, atilan: 41, yenilen: 41, averaj: 0, puan: 37, kategori: 'Trendyol Süper Lig' },
  { id: '12', takim: 'Gaziantep FK', oynanan: 34, galibiyet: 9, beraberlik: 10, maglubiyet: 15, atilan: 43, yenilen: 58, averaj: -15, puan: 37, kategori: 'Trendyol Süper Lig' },
  { id: '13', takim: 'Kasımpaşa', oynanan: 34, galibiyet: 8, beraberlik: 11, maglubiyet: 15, atilan: 33, yenilen: 49, averaj: -16, puan: 35, kategori: 'Trendyol Süper Lig' },
  { id: '14', takim: 'Natura Dünyası Gençlerbirliği', oynanan: 34, galibiyet: 9, beraberlik: 7, maglubiyet: 18, atilan: 36, yenilen: 47, averaj: -11, puan: 34, kategori: 'Trendyol Süper Lig' },
  { id: '15', takim: 'ikas Eyüpspor', oynanan: 34, galibiyet: 8, beraberlik: 9, maglubiyet: 17, atilan: 33, yenilen: 48, averaj: -15, puan: 33, kategori: 'Trendyol Süper Lig' },
  { id: '16', takim: 'Hesap.com Antalyaspor', oynanan: 34, galibiyet: 8, beraberlik: 8, maglubiyet: 18, atilan: 33, yenilen: 55, averaj: -22, puan: 32, kategori: 'Trendyol Süper Lig' },
  { id: '17', takim: 'Zecorner Kayserispor', oynanan: 34, galibiyet: 6, beraberlik: 12, maglubiyet: 16, atilan: 27, yenilen: 62, averaj: -35, puan: 30, kategori: 'Trendyol Süper Lig' },
  { id: '18', takim: 'Mısırlı.com.tr Fatih Karagümrük', oynanan: 34, galibiyet: 8, beraberlik: 6, maglubiyet: 20, atilan: 31, yenilen: 54, averaj: -23, puan: 30, kategori: 'Trendyol Süper Lig' },
  
  // Avrupa Ligi (36 Takım Tam Liste)
  { id: '19', takim: 'Olympique Lyon', oynanan: 8, galibiyet: 7, beraberlik: 0, maglubiyet: 1, atilan: 18, yenilen: 5, averaj: 13, puan: 21, kategori: 'Avrupa Ligi' },
  { id: '20', takim: 'Aston Villa', oynanan: 8, galibiyet: 7, beraberlik: 0, maglubiyet: 1, atilan: 14, yenilen: 6, averaj: 8, puan: 21, kategori: 'Avrupa Ligi' },
  { id: '21', takim: 'FC Midtjylland', oynanan: 8, galibiyet: 6, beraberlik: 1, maglubiyet: 1, atilan: 18, yenilen: 8, averaj: 10, puan: 19, kategori: 'Avrupa Ligi' },
  { id: '22', takim: 'Porto', oynanan: 8, galibiyet: 5, beraberlik: 2, maglubiyet: 1, atilan: 13, yenilen: 7, averaj: 6, puan: 17, kategori: 'Avrupa Ligi' },
  { id: '23', takim: 'Real Betis', oynanan: 8, galibiyet: 5, beraberlik: 2, maglubiyet: 1, atilan: 13, yenilen: 7, averaj: 6, puan: 17, kategori: 'Avrupa Ligi' },
  { id: '24', takim: 'Braga', oynanan: 8, galibiyet: 5, beraberlik: 2, maglubiyet: 1, atilan: 11, yenilen: 5, averaj: 6, puan: 17, kategori: 'Avrupa Ligi' },
  { id: '25', takim: 'Freiburg', oynanan: 8, galibiyet: 5, beraberlik: 2, maglubiyet: 1, atilan: 10, yenilen: 4, averaj: 6, puan: 17, kategori: 'Avrupa Ligi' },
  { id: '26', takim: 'Roma', oynanan: 8, galibiyet: 5, beraberlik: 1, maglubiyet: 2, atilan: 13, yenilen: 6, averaj: 7, puan: 16, kategori: 'Avrupa Ligi' },
  { id: '27', takim: 'KRC Genk', oynanan: 8, galibiyet: 5, beraberlik: 1, maglubiyet: 2, atilan: 11, yenilen: 7, averaj: 4, puan: 16, kategori: 'Avrupa Ligi' },
  { id: '28', takim: 'Bologna', oynanan: 8, galibiyet: 4, beraberlik: 3, maglubiyet: 1, atilan: 14, yenilen: 7, averaj: 7, puan: 15, kategori: 'Avrupa Ligi' },
  { id: '29', takim: 'Vfb Stuttgart', oynanan: 8, galibiyet: 5, beraberlik: 0, maglubiyet: 3, atilan: 15, yenilen: 9, averaj: 6, puan: 15, kategori: 'Avrupa Ligi' },
  { id: '30', takim: 'Ferencvaros', oynanan: 8, galibiyet: 4, beraberlik: 3, maglubiyet: 1, atilan: 12, yenilen: 11, averaj: 1, puan: 15, kategori: 'Avrupa Ligi' },
  { id: '31', takim: 'Nottingham Forest', oynanan: 8, galibiyet: 4, beraberlik: 2, maglubiyet: 2, atilan: 15, yenilen: 7, averaj: 8, puan: 14, kategori: 'Avrupa Ligi' },
  { id: '32', takim: 'Viktoria Plzen', oynanan: 8, galibiyet: 3, beraberlik: 5, maglubiyet: 0, atilan: 8, yenilen: 3, averaj: 5, puan: 14, kategori: 'Avrupa Ligi' },
  { id: '33', takim: 'Kızıl Yıldız', oynanan: 8, galibiyet: 4, beraberlik: 2, maglubiyet: 2, atilan: 7, yenilen: 6, averaj: 1, puan: 14, kategori: 'Avrupa Ligi' },
  { id: '34', takim: 'Celta Vigo', oynanan: 8, galibiyet: 4, beraberlik: 1, maglubiyet: 3, atilan: 15, yenilen: 11, averaj: 4, puan: 13, kategori: 'Avrupa Ligi' },
  { id: '35', takim: 'PAOK', oynanan: 8, galibiyet: 3, beraberlik: 3, maglubiyet: 2, atilan: 17, yenilen: 14, averaj: 3, puan: 12, kategori: 'Avrupa Ligi' },
  { id: '36', takim: 'Lille', oynanan: 8, galibiyet: 4, beraberlik: 0, maglubiyet: 4, atilan: 12, yenilen: 9, averaj: 3, puan: 12, kategori: 'Avrupa Ligi' },
  { id: '37', takim: 'Fenerbahçe', oynanan: 8, galibiyet: 3, beraberlik: 3, maglubiyet: 2, atilan: 10, yenilen: 7, averaj: 3, puan: 12, kategori: 'Avrupa Ligi' },
  { id: '38', takim: 'Panathinaikos', oynanan: 8, galibiyet: 3, beraberlik: 3, maglubiyet: 2, atilan: 11, yenilen: 9, averaj: 2, puan: 12, kategori: 'Avrupa Ligi' },
  { id: '39', takim: 'Celtic', oynanan: 8, galibiyet: 3, beraberlik: 2, maglubiyet: 3, atilan: 13, yenilen: 15, averaj: -2, puan: 11, kategori: 'Avrupa Ligi' },
  { id: '40', takim: 'PFC Ludogorets 1945', oynanan: 8, galibiyet: 3, beraberlik: 1, maglubiyet: 4, atilan: 12, yenilen: 15, averaj: -3, puan: 10, kategori: 'Avrupa Ligi' },
  { id: '41', takim: 'GNK Dinamo Zagreb', oynanan: 8, galibiyet: 3, beraberlik: 1, maglubiyet: 4, atilan: 12, yenilen: 16, averaj: -4, puan: 10, kategori: 'Avrupa Ligi' },
  { id: '42', takim: 'Brann', oynanan: 8, galibiyet: 2, beraberlik: 3, maglubiyet: 3, atilan: 9, yenilen: 11, averaj: -2, puan: 9, kategori: 'Avrupa Ligi' },
  { id: '43', takim: 'BSC Young Boys', oynanan: 8, galibiyet: 3, beraberlik: 0, maglubiyet: 5, atilan: 10, yenilen: 16, averaj: -6, puan: 9, kategori: 'Avrupa Ligi' },
  { id: '44', takim: 'Sturm Graz', oynanan: 8, galibiyet: 2, beraberlik: 1, maglubiyet: 5, atilan: 5, yenilen: 11, averaj: -6, puan: 7, kategori: 'Avrupa Ligi' },
  { id: '45', takim: 'FCSB', oynanan: 8, galibiyet: 2, beraberlik: 1, maglubiyet: 5, atilan: 9, yenilen: 16, averaj: -7, puan: 7, kategori: 'Avrupa Ligi' },
  { id: '46', takim: 'Go Ahead Eagles', oynanan: 8, galibiyet: 2, beraberlik: 1, maglubiyet: 5, atilan: 6, yenilen: 14, averaj: -8, puan: 7, kategori: 'Avrupa Ligi' },
  { id: '47', takim: 'Feyenoord', oynanan: 8, galibiyet: 2, beraberlik: 0, maglubiyet: 6, atilan: 11, yenilen: 15, averaj: -4, puan: 6, kategori: 'Avrupa Ligi' },
  { id: '48', takim: 'Basel', oynanan: 8, galibiyet: 2, beraberlik: 0, maglubiyet: 6, atilan: 9, yenilen: 13, averaj: -4, puan: 6, kategori: 'Avrupa Ligi' },
  { id: '49', takim: 'FC Salzburg', oynanan: 8, galibiyet: 2, beraberlik: 0, maglubiyet: 6, atilan: 10, yenilen: 15, averaj: -5, puan: 6, kategori: 'Avrupa Ligi' },
  { id: '50', takim: 'Rangers FC', oynanan: 8, galibiyet: 1, beraberlik: 1, maglubiyet: 6, atilan: 5, yenilen: 14, averaj: -9, puan: 4, kategori: 'Avrupa Ligi' },
  { id: '51', takim: 'Nice', oynanan: 8, galibiyet: 1, beraberlik: 0, maglubiyet: 7, atilan: 7, yenilen: 15, averaj: -8, puan: 3, kategori: 'Avrupa Ligi' },
  { id: '52', takim: 'Utrecht', oynanan: 8, galibiyet: 0, beraberlik: 1, maglubiyet: 7, atilan: 5, yenilen: 15, averaj: -10, puan: 1, kategori: 'Avrupa Ligi' },
  { id: '53', takim: 'Malmö', oynanan: 8, galibiyet: 0, beraberlik: 1, maglubiyet: 7, atilan: 4, yenilen: 15, averaj: -11, puan: 1, kategori: 'Avrupa Ligi' },
  { id: '54', takim: 'Maccabi Tel Aviv', oynanan: 8, galibiyet: 0, beraberlik: 1, maglubiyet: 7, atilan: 2, yenilen: 22, averaj: -20, puan: 1, kategori: 'Avrupa Ligi' },
];

// --- 3. GOLLER TABLOSU ---
export const goller = [
  { id: '1', macId: '47', oyuncu: 'Jaden Sancho', dakika: '25', takim: 'Aston Villa' },
  { id: '2', macId: '48', oyuncu: 'İsmail Yüksek', dakika: '18', takim: 'Fenerbahçe' },
  { id: '3', macId: '48', oyuncu: 'Y. Cisotto', dakika: '71', takim: 'FCSB' },
  { id: '4', macId: '49', oyuncu: 'Kerem Aktürkoğlu', dakika: '4', takim: 'Fenerbahçe' },
  { id: '5', macId: '49', oyuncu: 'John Duran', dakika: '67', takim: 'Fenerbahçe' },
  { id: '6', macId: '50', oyuncu: 'M. Guendouzi', dakika: '28', takim: 'Fenerbahçe' },
  { id: '7', macId: '50', oyuncu: 'J. Oosterwolde', dakika: '48', takim: 'Fenerbahçe' },
  { id: '8', macId: '18', oyuncu: 'F. Hadergjonaj', dakika: '3', takim: 'Alanyaspor' },
  { id: '9', macId: '18', oyuncu: 'A. Talisca', dakika: '9', takim: 'Fenerbahçe' },
  { id: '10', macId: '18', oyuncu: 'G. Makouta', dakika: '27', takim: 'Alanyaspor' },
  { id: '11', macId: '18', oyuncu: 'A. Musaba', dakika: '52', takim: 'Fenerbahçe' },
  { id: '12', macId: '18', oyuncu: 'A. Talisca', dakika: '78', takim: 'Fenerbahçe' },
  { id: '13', macId: '19', oyuncu: 'D. Nene', dakika: '17', takim: 'Fenerbahçe' },
  { id: '14', macId: '19', oyuncu: 'Janderson', dakika: '24', takim: 'Göztepe' },
];

// --- 4. VERİ ÇEKME FONKSİYONLARI ---
export const FiksturDatabase = {
  maclariGetir: async () => {
    return maclar;
  },
  puanDurumuGetir: async (kategori: string) => {
    const veriler = puan_durumu.filter(p => p.kategori === kategori);
    // Puana ve averaja göre otomatik sıralama
    return veriler.sort((a, b) => b.puan - a.puan || b.averaj - a.averaj);
  },
  golleriGetir: async (macId: string) => {
    return goller.filter(g => g.macId === macId);
  }
};