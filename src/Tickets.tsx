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
import TileComp from '../components/tiles'


const totalTickets = 0;
// const [totalTickets, setTotalTickets] = useState(0);
// const [closedTickets, setClosedTickets] = useState(0);
// const [openTicket, setOpenTicket] = useState(0);
// const [pendingTickets, setPendingTickets] = useState(0);
// const [resolvedTickets, setResolvedTickets] = useState(0);

const discrepencies = [
  {
    key: '1',
    employee: 'Bilal',
      date: '19/01/2025',
      report: 'Sunday',
      from: 'Office'
  },
  {
      key: '2',
      employee: 'Bilal',
      date: '19/01/2025',
      report: 'Sunday',
      from: 'Office'
    },
    {
      key: '3',
      employee: 'Bilal',
      date: '19/01/2025',
      report: 'Sunday',
      from: 'Office'
    },
    {
      key: '4',
      employee: 'Bilal',
      date: '19/01/2025',
      report: 'Sunday',
      from: 'Office'
    },
    {
      key: '5',
      employee: 'Bilal',
      date: '19/01/2025',
      report: 'Sunday',
      from: 'Office'
    },
]



const Tickets = () => {

    return (
        <SafeAreaView>
            <ScrollView>
            <View style= {{flexDirection:'row', marginTop:15 , width:'100%', }}>
            <View style= {{flexDirection:'row', width: '35%',}}>

<TouchableOpacity 
//  onPress={() => router.push("/(screens)/currentNeeds")}
 
    // onPress = {signOut}
  style={{
  padding: 5,
  flexDirection: 'row',
  backgroundColor: 'white',
  borderRadius:25,
//   width: '45%',
  justifyContent: 'center', // Centers text vertically
  // alignItems: 'center',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    width: '100%',
    elevation: 10,
  
}}
>
      <Icon  name= {"document-attach-sharp"} size={23} />
      <Text 
            style={{ textAlign: 'center', padding:5, fontSize: 15, fontWeight:'bold' , color: Colors.secondary}} >
             Create Ticket
</Text>
{/* <Icon  name= {"document-attach-sharp"} size={5}/> */}

</TouchableOpacity>
</View>
        <View style= {{flexDirection:'row', width: '35%',}}>

        <TouchableOpacity 
        //  onPress={() => router.push("/(screens)/currentNeeds")}
         
            // onPress = {signOut}
          style={{
          padding: 5,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius:25,
          width: '100%',

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
        </View>
            </View>

            <View style= {{flexDirection:'row', marginLeft:2 ,}}>
            <TileComp backgroundColor= {Colors.orange} tileName="Total Tickets" number="0"/>
            <TileComp backgroundColor= {Colors.pink}tileName="asdadad Tickets" number="0"/>
            </View>
            <View style= {{flexDirection:'row', marginLeft:2}}>
            <TileComp backgroundColor= {Colors.cyan} tileName="Total Tickets" number="0"/>
            <TileComp backgroundColor= {Colors.blue} tileName="Total Tickets" number="0"/>
            </View>
            <View style= {{flexDirection:'row', marginLeft:2 }}>
            <TileComp backgroundColor= {Colors.secondary} tileName="Total Tickets" number="0"/>
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
        <View style={{ alignItems: 'center', width: '30%', flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}> Employee</Text>
        <Text style={{ color: 'white', fontSize: 16,  }}> {docType.employee}</Text>
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
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Report</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.report}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}> From</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.from}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}> Date</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{docType.date}</Text>
        </View>

        </View>
        </View>
       ))}

            </ScrollView> 
        </SafeAreaView>
    )
}

export default Tickets 