import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View , ScrollView} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Modal from "react-native-modal";
import Colors from '../Assets/colors/colors';
import { Calendar } from 'react-native-calendars';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
// import Ionicons from '@react-native-vector-icons/ionicons';
import Icon from 'react-native-vector-icons/Ionicons';


// const myIcon = <Icon name="" size={30} color="#900" />;

const breaks = [
    {
      key: '1',
      break_type: 'Casual',
      break_in: '05:45',
      break_out: '06:00',
      total_time: '00:15',
    },
    {
      key: '2',
      break_type: 'Casual',
      break_in: '05:45',
      break_out: '06:00',
      total_time: '00:15',
    },
    {
      key: '3',
      break_type: 'Casual',
      break_in: '05:45',
      break_out: '06:00',
      total_time: '00:15',
    },
    {
      id: 4,
      break_type: 'Casual',
      break_in: '05:45',
      break_out: '06:00',
      total_time: '00:15',
    },
]

const Breaks = () => {

    return (
        <SafeAreaView>
            <ScrollView>
    <View
            style={{
            
            backgroundColor: Colors.primary,
            borderRadius: 40,
            padding: 15,
            margin: 5,
            height:'99%',
            
            // justifyContent: 'center'
        }}>
          
        <View>
        <View style={{ flexDirection: 'row' , width: '90%', padding:10}}>     
        {/* <Text style={{
                color: Colors.secondary,
                fontSize: 20,
                fontWeight: 'bold',
                // marginLeft: 5,
                width: '50%',
                // justifyContent: 'center',
                 
                }}>
               Breaks Taken
            </Text> */}
            
            <TouchableOpacity 
        //  onPress={() => router.push("/(screens)/currentNeeds")}
         
            // onPress = {signOut}
          style={{
          padding: 5,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius:25,
          width: '35%',
          justifyContent: 'center', // Centers text vertically
          // alignItems: 'center',
          shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          
        }}
        >
              <Icon  name= {"document-attach-sharp"} size={23} />
              <Text 
                    style={{ textAlign: 'center', padding:5, fontSize: 15, fontWeight:'bold' , color: Colors.secondary}} >
                     Export
        </Text>
        {/* <Icon  name= {"document-attach-sharp"} size={5}/> */}
        
        </TouchableOpacity>
        {/* <Ionicons name="add"></Ionicons> */}
        </View>

       

           
        {breaks.map((docType, id) => (
     <View
        style={{
            marginBottom: 10,
            backgroundColor: Colors.secondary,
            borderRadius: 15,
            padding: 20,
            // flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            marginTop:10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
        }}
        >
        <View style={{ alignItems: 'center', width: '30%', flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Break Type </Text>
        <Text style={{ color: 'white', fontSize: 16,  }}> {docType.break_type}</Text>
        </View>
        <View
        style={{
            marginBottom: 10,
            backgroundColor: Colors.secondary,
            borderRadius: 15,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:10
        }}
        >
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Break In</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.break_in}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Break Out</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.break_out}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Total Time</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.total_time}</Text>
        </View>
        </View>
        </View>
       ))}



       
        
       
      
        </View > 
        </View>

        </ScrollView> 
        </SafeAreaView>
    )
}

export default Breaks;