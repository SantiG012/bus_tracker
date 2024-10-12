

import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { ThemedText } from '@/components/ThemedText';

import { apiBuses } from '@/api/buses'

export default function ListBuses(){

  const [buses, setBuses] = useState([]);
  const  { getBuses } = apiBuses();

  console.log(">>>>>>>> ", apiBuses)

  const fetchBuses = async () =>{
    await getBuses().then((response)=>{
      const { data } = response;  // response.data
      setBuses(data);
    }).catch((err)=>{
      console.log(">>>> ", err);
      alert("No se obtuvo la lista de buses ", err);
    })
  }

  useEffect(()=>{
    fetchBuses();
  }, []);
  

  return (
    <View style={{height: 100}} >
      <ScrollView style={styles.container}>
        {buses.map((a_bus)=>
          <View style={[styles.mt10, styles.card]} key={a_bus.id}>
            <View style={styles.cardHeader}>  
              <ThemedText>{a_bus.plate}</ThemedText>
            </View>
            <View>
              <ThemedText>
                <Text style={styles.activeBadge} >{a_bus.status}</Text> | 
                ({a_bus.current_latitudine}, {a_bus.current_longitudine})
              </ThemedText>
            </View>
          </View> 
        )}
      </ScrollView>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  mt10:{
    marginTop:10
  },
  card:{
    marginLeft:2,
    justifyContent:'center'
  },
  cardHeader:{
    fontWeight:'bold'
  },
  activeBadge:{
    color:'green'
  },
  inActiveBadge:{
    color:'orange'
  }
})