import { View, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import MapView, {  Marker } from 'react-native-maps'
import React, {useState} from 'react';



export default function HomeScreen() {

  const [searchText, setSearchText] = useState('');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 3.450541,
            longitude:-76.534630,
            latitudeDelta:0.922,
            longitudeDelta: 0.0483
          }}
          >
            <Marker coordinate={{latitude: 3.450541,longitude:-76.534630}}
              title='Cali'
              description="Cali"
              pinColor='blue'/>
          </MapView>
      </View>
      <ThemedView style={styles.footContainer}>
        <ThemedText type='title'>Bienvenido!</ThemedText>
        <TextInput style={styles.searchInput}
          placeholder='Buscar estaciones o buses...'
          value={searchText}
          onChangeText={setSearchText}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  mapContainer:{
    flex:8
  },
  footContainer:{
    flex:2,
    padding: 12
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  searchInput:{
    marginTop:12,
    height:40,
    borderColor:'#CCC',
    borderWidth:2,
    padding:13,
    backgroundColor:'#FFF',
    color:'#000',
    borderRadius:3, 
    width:'100%'
  }

});
