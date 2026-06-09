import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HaberDetay({ route, navigation }: any) {
  const { haber } = route.params;

  return (
    <View style={styles.container}>
      {/* Şeffaf Üst Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back-ios" size={24} color="#FEDD00" />
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false}>
        <Image source={haber.foto} style={styles.mainImage} />
        
        <View style={styles.contentContainer}>
          <Text style={styles.tarih}>{haber.tarih}</Text>
          <Text style={styles.baslik}>{haber.baslik}</Text>
          <View style={styles.divider} />
          <Text style={styles.icerik}>{haber.icerik}</Text>

          {haber.ekstraFotolar && haber.ekstraFotolar.length > 0 && (
            <>
              <Text style={styles.galeriBaslik}>Basın Fotoğrafları</Text>
              <View style={styles.grid}>
                {haber.ekstraFotolar.map((foto: any, index: number) => (
                  <Image key={index} source={foto} style={styles.gridImage} />
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001430' },
  header: { position: 'absolute', top: 50, left: 15, zIndex: 10 },
  backButton: { backgroundColor: 'rgba(0,20,48,0.6)', padding: 10, borderRadius: 20 },
  mainImage: { width: '100%', height: 250, resizeMode: 'cover' },
  contentContainer: { padding: 20 },
  tarih: { color: '#FEDD00', fontSize: 14, marginBottom: 10 },
  baslik: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 20 },
  icerik: { color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 24 },
  galeriBaslik: { color: '#FEDD00', fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridImage: { width: '48%', height: 120, borderRadius: 10, marginBottom: 10 },
});