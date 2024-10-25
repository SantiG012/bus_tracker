import { View, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import MapView, {  Marker } from 'react-native-maps'
import React, { useState, useEffect} from 'react';

import { useFocusEffect } from '@react-navigation/native';
import * as Location from 'expo-location';

import { apiStations } from  '@/api/stations'

export default function HomeScreen() {

  const { getStations } = apiStations()
  const [searchText, setSearchText] = useState('');
  const [current, setLocation] = useState({latitude: 3.450541,longitude:-76.534630});
  const [message, setMessage] = useState("");
  const [stations, setStations] = useState([]);

  useFocusEffect(()=>{
    (async ()=>{
      let { status } = await Location.requestForegroundPermissionsAsync();
      if( status !== 'granted'){
        setMessage('No se concedieron los permisos de ubicacion')
        return;
      }
      let my_location = await Location.getCurrentPositionAsync();
      let { latitude, longitude } = my_location.coords;
      setLocation({latitude, longitude});      
    })();
  });


  return (
    <ThemedView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 3.450541,
            longitude:-76.534630,
            latitudeDelta:0.04,
            longitudeDelta: 0.07
          }}
          >
            <Marker coordinate={ current }
              title='Aquí esta usted'
              description="Aquí esta usted"
              pinColor='orange'/>
              {stations.map((a_station)=>{
                const {latitude, longitude} = a_station;
                console.log(">>>>> ", a_station)
                return (
                  <Marker coordinate={current}
                  title="{a_station.name}"
                  description="{a_station.description}"
                  pinColor='black'/>)
              })}
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
