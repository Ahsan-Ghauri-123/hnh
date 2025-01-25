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

const discrepencies = [
    {
      key: '1',
      date: '5/01/2025',
         day: 'Sunday',
        occasion: 'Sunday'
    },
    {
        key: '2',
        date: '12/01/2025',
         day: 'Sunday',
        occasion: 'Sunday'
      },
      {
        key: '3',
        date: '19/01/2025',
         day: 'Sunday',
        occasion: 'Sunday'
      },
      {
        key: '4',
        date: '26/01/2025',
         day: 'Sunday',
        occasion: 'Sunday'
      },
      
]

const Holiday = () => {

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

       

           
        {discrepencies.map((docType, id) => (
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
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Date</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.date}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}> Occasion</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.occasion}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}> Day</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.day}</Text>
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

export default Holiday;