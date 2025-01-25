import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Modal from "react-native-modal";
import Colors from '../Assets/colors/colors';
import { Calendar } from 'react-native-calendars';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';


const Leaves = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState("");
    const [datePressed, setDatePressed] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');
   


    const data = [
        {key:'1', value:'Casual'},
        {key:'2', value:'Sick'},
        {key:'3', value:'Annual'},
        // {key:'4', value:'Computers', disabled:true},
        // {key:'5', value:'Vegetables'},
        // {key:'6', value:'Diary Products'},
        // {key:'7', value:'Drinks'},
    ]

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const exportToExcel = async () => {
          try {
              // Convert the users array to a worksheet
              const ws = XLSX.utils.json_to_sheet(users);
      
              // Create a new workbook and append the worksheet
              const wb = XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(wb, ws, 'Users');
      
              // Write the workbook to binary string
              const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
      
              // Convert binary string to a buffer
              const buffer = new Uint8Array(wbout.length);
              for (let i = 0; i < wbout.length; i++) {
                  buffer[i] = wbout.charCodeAt(i);
              }
      
              // Convert buffer to string
              const dataString = String.fromCharCode.apply(null, buffer);
      
              // Define file path
              const filePath = `${RNFS.DownloadDirectoryPath}/UsersX.xlsx`;
      
              // Write the file to the device
              await RNFS.writeFile(filePath, dataString, 'ascii');
      
              Alert.alert('Success', `File saved to ${filePath}`);
          } catch (error) {
              Alert.alert('Error', 'Failed to export file');
              console.error(error);
          }
      };


    return(
        <SafeAreaView>
        <View
            style={{
            marginTop:10,
            backgroundColor: Colors.primary,
            borderRadius: 40,
            padding: 15,
            margin: 5,
            height:'17%'
        }}>
          {/* <Text style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold'
          }}>
            Dashboard
          </Text> */}
          <View>
            <Text style={{
                color: Colors.secondary,
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10
                }}>
                Add Leaves / Export
            </Text>
        </View >
        <View >
        <View style={{flexDirection: 'row', width: '100%'}}>
        <TouchableOpacity 
        //  onPress={() => router.push("/(screens)/currentNeeds")}
            onPress = {toggleModal}
            style={{
            backgroundColor: 'white',
            borderRadius:25,
            // paddingHorizontal: 10,
            margin: 5,
            width: '35%',
            shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
            // justifyContent: 'center', // Centers text vertically
            // alignItems: 'center',
            
            }}
        >
              <Text 
                    style={{ textAlign: 'center', padding:10, fontSize: 15, fontWeight:'bold' , color: Colors.secondary}} >
                     Add
        </Text>
        </TouchableOpacity>

        <Modal 
            isVisible={isModalVisible}
        >
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius:30  }}>
                <View style={{ flexDirection: 'row'  }}>
                <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Add Leave</Text>
                <TouchableOpacity onPress={toggleModal}>
                 <Image style= {{marginLeft: 180}} source={require('./../Assets/remove.png')} />
                 </TouchableOpacity>
                </View>

                <Text
                >Add Email</Text>
                <TextInput
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 15,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        // width: '80%',
                        // height: 70,
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}
                    placeholder="Email"
                    placeholderTextColor="#B0BEC5"
                    // value={name}
                    // onChangeText={setName}
                 />
                 <Text
                >Leave Type</Text>
                 <View style= {{ paddingBottom: 20, }}>
                 <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                />
                </View>

                <Text>
                            Date
                        </Text>

                <TextInput
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 15,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        // width: '80%',
                        // height: 70
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}
                    // placeholder={selectedDate}
                    placeholderTextColor="#B0BEC5"
                    onPress={() => setDatePressed(true)}
                    value={selectedDate}
                    // editable = {false} 
                    // onChangeText={setName}
                 />

                    { datePressed
                    ?  <Calendar
                        onDayPress={day => {
                            setSelectedDate(day.dateString);
                            setDatePressed(false)
                        }}
                        markedDates={{
                            [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                        }}
                        theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: Colors.primary,
                        textSectionTitleColor: Colors.secondary,
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: 'white',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#dd99ee',
                        
   
                        }}
                    // onDayPress={handleDayPress}
                    // markedDates={markedDates}
                    markingType={"period"}
                    />
                    : <View>
                        <Text>
                            Reason for Absence
                        </Text>
                    </View>
                    }
                 

                 <TextInput
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 15,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        // width: '80%',
                        // height: 70
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}
                    // placeholder={selectedDate}
                    placeholderTextColor="#B0BEC5"
                    // onPress={() => setDatePressed(true)}
                    multiline= {true}
                    // value={selectedDate}
                    // editable = {false} 
                    // onChangeText={setName}
                 />
                    
                    
                </View>

                
                </View>
        </Modal>

        <TouchableOpacity 
        style={{
          backgroundColor: Colors.red,
          borderRadius: 25,
          margin: 5,
          width: '35%',
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
              <Text 
                    style={{ textAlign: 'center', padding:10 , fontSize: 15, fontWeight:'bold', color:'white'}} >
                     Export
            </Text>
        </TouchableOpacity>
        </View>
        </View>
            
        
        
        </View>
        
        <View
            style={{
            
            backgroundColor: Colors.primary,
            borderRadius: 40,
            padding: 15,
            margin: 5,
            height:'80%'

        }}>
        <View>
            <Text style={{
                color: Colors.secondary,
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 15
                }}>
               Remaining Leaves
            </Text>
            <Text style={{
                color: Colors.secondary,
                fontSize: 20,
                
                marginLeft: 15
                }}>
               0
            </Text>

            <Text style={{
                color: Colors.secondary,
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop:20
                }}>
               Remaining Leaves
            </Text>

     <View
        style={{
            marginBottom: 10,
            backgroundColor: Colors.secondary,
            borderRadius: 15,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leave Type</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Casual</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>No. of Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leaves Taken</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
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
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leave Type</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Sick</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>No. of Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leaves Taken</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
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
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leave Type</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Annual</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>No. of Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
        <View style={{ alignItems: 'center', width: '30%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Leaves Taken</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
        </View>
        </View>
        </View >
        </View>
        </SafeAreaView>
    )
}

export default Leaves;